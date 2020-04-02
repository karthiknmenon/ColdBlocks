from __future__ import division
from __future__ import print_function
from ortools.constraint_solver import routing_enums_pb2
from ortools.constraint_solver import pywrapcp
from flask import jsonify, Flask, make_response,request, render_template
from flask_restful import Resource, Api
from flask_cors import CORS
import json
import requests
import urllib
app = Flask(__name__)
CORS(app)
api = Api(app)
get_vehicle= 0


def create_data():
  """Creates the data."""
  data = {}
  # data['API_key'] = 'AIzaSyCTkzOzDdOn1vBbnVvLcf9WYuiypjtFO08'
  data['addresses'] = ['3610+Hacks+Cross+Rd+Memphis+TN', # depot
                       '1921+Elvis+Presley+Blvd+Memphis+TN',
                       '149+Union+Avenue+Memphis+TN',
                       '1034+Audubon+Drive+Memphis+TN',
                      ]                    
  data['num_vehicles'] = 1
  data['depot'] = 0                      
  return data

def create_distance_matrix(data):
  addresses = data["addresses"]
  API_key = data["API_key"]
  # Distance Matrix API only accepts 100 elements per request, so get rows in multiple requests.
  max_elements = 100
  num_addresses = len(addresses) # 16 in this example.
  # Maximum number of rows that can be computed per request (6 in this example).
  max_rows = max_elements // num_addresses
  # num_addresses = q * max_rows + r (q = 2 and r = 4 in this example).
  q, r = divmod(num_addresses, max_rows)
  dest_addresses = addresses
  distance_matrix = []
  # Send q requests, returning max_rows rows per request.
  for i in range(q):
    origin_addresses = addresses[i * max_rows: (i + 1) * max_rows]
    response = send_request(origin_addresses, dest_addresses, API_key)
    distance_matrix += build_distance_matrix(response)

  # Get the remaining remaining r rows, if necessary.
  if r > 0:
    origin_addresses = addresses[q * max_rows: q * max_rows + r]
    response = send_request(origin_addresses, dest_addresses, API_key)
    distance_matrix += build_distance_matrix(response)
  data['distance_matrix'] = distance_matrix
  return distance_matrix

def send_request(origin_addresses, dest_addresses, API_key):
  """ Build and send request for the given origin and destination addresses."""
  def build_address_str(addresses):
    # Build a pipe-separated string of addresses
    address_str = ''
    for i in range(len(addresses) - 1):
      address_str += addresses[i] + '|'
    address_str += addresses[-1]
    return address_str

  request = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial'
  origin_address_str = build_address_str(origin_addresses)
  dest_address_str = build_address_str(dest_addresses)
  request = request + '&origins=' + origin_address_str + '&destinations=' + \
                       dest_address_str + '&key=' + API_key
  jsonResult = urllib.request.urlopen(request).read()
  response = json.loads(jsonResult)
  return response

def build_distance_matrix(response):
  distance_matrix = []
  for row in response['rows']:
    row_list = [row['elements'][j]['distance']['value'] for j in range(len(row['elements']))]
    distance_matrix.append(row_list)
  return distance_matrix

def print_solution(data, manager, routing, solution):
    # global global_sol
    # global jsonData
    # global_sol = []
    """Prints solution on console."""
    max_route_distance = 0
    for vehicle_id in range(data['num_vehicles']):
        index = routing.Start(vehicle_id)
        # plan_output = 'Route for vehicle {}:\n'.format(vehicle_id)
        plan_output = ''
        route_distance = 0
        while not routing.IsEnd(index):
            jsonData = '{}'
            jsonDataParsed = json.loads(jsonData)
            plan_output += ' {} -> '.format(manager.IndexToNode(index))
            previous_index = index
            index = solution.Value(routing.NextVar(index))
            route_distance += routing.GetArcCostForVehicle(
                previous_index, index, vehicle_id)
        plan_output += '{}\n'.format(manager.IndexToNode(index))
        plan_output += 'Distance of the route: {}m\n'.format(route_distance)
        print(plan_output)
        # max_route_distance = max(route_distance, max_route_distance)
        # sol_dict = {"route" : str(plan_output)}
        # print(sol_dict)
        # jsonDataParsed.update(sol_dict)  
        # jsonData = json.dumps(jsonDataParsed)        
        # global_sol.append(jsonDataParsed)
        # print("JSON data")
        # print(jsonDataParsed)
        # print("global array")
        # print(global_sol)   
    print('Maximum of the route distances: {}m'.format(max_route_distance))

def main():
  """Entry point of the program"""
  # Create the data.
  data = create_data()
  addresses = data['addresses']
  API_key = data['API_key']
  data['distance_matrix'] = create_distance_matrix(data)
  print(data['distance_matrix'])
  # data['distance_matrix'] = distance_matrix
  # print(data['distance_matrix'])
  manager = pywrapcp.RoutingIndexManager(len(data['distance_matrix']),
                                           data['num_vehicles'], data['depot'])

  # Create Routing Model.
  routing = pywrapcp.RoutingModel(manager)


  # Create and register a transit callback.
  def distance_callback(from_index, to_index):
      """Returns the distance between the two nodes."""
      # Convert from routing variable Index to distance matrix NodeIndex.
      from_node = manager.IndexToNode(from_index)
      to_node = manager.IndexToNode(to_index)
      return data['distance_matrix'][from_node][to_node]

  transit_callback_index = routing.RegisterTransitCallback(distance_callback)

  # Define cost of each arc.
  routing.SetArcCostEvaluatorOfAllVehicles(transit_callback_index)

  # Add Distance constraint.
  dimension_name = 'Distance'
  routing.AddDimension(
      transit_callback_index,
      0,  # no slack
      3000,  # vehicle maximum travel distance
      True,  # start cumul to zero
      dimension_name)
  distance_dimension = routing.GetDimensionOrDie(dimension_name)
  distance_dimension.SetGlobalSpanCostCoefficient(100)

  # Setting first solution heuristic.
  search_parameters = pywrapcp.DefaultRoutingSearchParameters()
  search_parameters.first_solution_strategy = (
      routing_enums_pb2.FirstSolutionStrategy.PATH_CHEAPEST_ARC)

  # Solve the problem.
  solution = routing.SolveWithParameters(search_parameters)

  # Print solution on console.
  if solution:
      print_solution(data, manager, routing, solution)


# @app.route("/", methods=['POST', 'GET'])
# def get():
#         global global_sol    
#         ar = jsonify(global_sol)
#         return (ar)

# global_sol = []

if __name__ == '__main__':
    main()
    # app.run(debug= True)
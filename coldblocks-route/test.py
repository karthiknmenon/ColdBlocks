from __future__ import division
from __future__ import print_function
from ortools.constraint_solver import routing_enums_pb2
from ortools.constraint_solver import pywrapcp
from flask import jsonify, Flask, make_response,request, render_template
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
import json
import ast 
# for distance matrix
import urllib
app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "http://localhost:3001"}})
import config

api = Api(app)

get_vehicle= 0

data = {}
def create_data_model():
    """Stores the data for the problem."""
    global data
    data['API_key'] = config.api_key
    # data['num_vehicles'] = 4
    data['depot'] = 0
    return data


def print_solution(data, manager, routing, solution):
    """Prints solution on console."""
    global global_sol
    global jsonData
    global_sol = []
    max_route_distance = 0
    total_distance = 0
    for vehicle_id in range(data['num_vehicles']):
        index = routing.Start(vehicle_id)
        # plan_output = 'Route for vehicle {}:\n'.format(vehicle_id)
        plan_output = ''
        route_distance = 0
        dist_route = ''
        while not routing.IsEnd(index):            
            jsonData = '{}'
            jsonDataParsed = json.loads(jsonData)
            plan_output += ' {} -> '.format(data['addresses'][manager.IndexToNode(index)])
            previous_index = index
            index = solution.Value(routing.NextVar(index))
            route_distance += routing.GetArcCostForVehicle(
                previous_index, index, vehicle_id)
        total_distance += route_distance
        plan_output += '{}\n'.format(data['addresses'][manager.IndexToNode(index)])
        dist_route += '{}m\n'.format(route_distance)
        print(plan_output)
        max_route_distance = max(route_distance, max_route_distance)
        sol_dict = {"vehicleId":str(vehicle_id+1), "route" : str(plan_output).replace('+',' '), "distance": str(dist_route)}
        jsonDataParsed.update(sol_dict)  
        # jsonData = json.dumps(jsonDataParsed)        
        global_sol.append(jsonDataParsed)
        print("JSON data")
        print(jsonDataParsed)
        print("global array")
        print(global_sol)   
    print('Total distance of all routes: {}m'.format(total_distance))
    print('Maximum of the route distances: {}m'.format(max_route_distance))

# create data matrix
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
  return distance_matrix

def send_request(origin_addresses, dest_addresses, API_key):
  # print(origin_addresses)
  # print("-")
  """ Build and send request for the given origin and destination addresses."""
  def build_address_str(addresses):
    # Build a pipe-separated string of addresses
    
    address_str = ''
    for i in range(len(addresses) - 1):
      address_str += addresses[i].replace(" ", "+") + '|'
    address_str += addresses[-1].replace(" ", "+")
    return address_str

  request = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial'
  origin_address_str = build_address_str(origin_addresses)
  dest_address_str = build_address_str(dest_addresses)
  request = request + '&origins=' + origin_address_str + '&destinations=' + \
                       dest_address_str + '&key=' + API_key

  jsonResult = urllib.request.urlopen(request).read()
  
  response = json.loads(jsonResult.decode('utf-8'))
  # print(response)
  return response

def build_distance_matrix(response):
  distance_matrix = []
  for row in response['rows']:
    row_list = [row['elements'][j]['distance']['value'] for j in range(len(row['elements']))]
    distance_matrix.append(row_list)
  return distance_matrix

@app.route("/", methods=['POST', 'GET'])
def get():
    if request.method == 'POST':
        global data
        
        print(type(data['distance_matrix']))
        # data['distance_matrix'] = [[0, 26326, 22476, 12925, 34489, 24847, 22444, 10258, 13294, 11750, 5841, 16724, 21458, 13709, 903, 1883, 10995, 9067, 15569, 658, 42618, 22476, 12639], [26681, 0, 33665, 14093, 14360, 25077, 13370, 21886, 17060, 17587, 26140, 31404, 37603, 17893, 27109, 26291, 21837, 22303, 19146, 26864, 17052, 45061, 17247], [22826, 33665, 0, 33317, 40518, 15036, 25652, 30650, 20920, 19885, 19413, 6572, 4861, 20548, 23254, 22669, 31386, 29459, 15027, 23009, 48648, 43161, 19902], [13103, 13900, 33303, 0, 27276, 27971, 16265, 8309, 19954, 20481, 17899, 27551, 32286, 20787, 13531, 12713, 8260, 8726, 22040, 13286, 29885, 31484, 20141], [34841, 14228, 40462, 27160, 0, 28678, 20167, 32700, 23857, 24384, 32937, 38201, 44400, 24690, 35269, 34684, 32651, 33117, 25943, 35024, 25679, 55875, 24044], [26941, 25466, 15047, 28355, 30234, 0, 11135, 34765, 17521, 16486, 25037, 20696, 18986, 17149, 27369, 26784, 35501, 33574, 11627, 27124, 40448, 47276, 16503], [22926, 13367, 25367, 16257, 20220, 10747, 0, 21797, 11942, 12469, 21023, 26287, 29305, 12775, 23354, 22770, 21748, 22214, 14028, 23109, 28350, 44972, 12129], [10426, 21145, 30626, 7744, 32235, 32997, 21223, 0, 21445, 19900, 15222, 24874, 29609, 21860, 10854, 10036, 558, 1535, 23719, 10609, 37129, 24394, 20789], [13597, 17090, 19305, 19979, 23942, 14063, 11897, 21421, 0, 1648, 10265, 12560, 17295, 1320, 14025, 13441, 22158, 20231, 5166, 13780, 32072, 34567, 674], [12926, 17658, 19829, 20548, 24510, 14587, 12466, 20750, 1679, 0, 9384, 11679, 16414, 991, 13354, 12769, 21486, 19559, 5309, 13109, 32640, 33686, 1033], [6048, 24728, 18798, 17911, 31581, 21939, 19536, 15244, 10141, 9325, 0, 13046, 17780, 9454, 5444, 7264, 15981, 14054, 12661, 5492, 39711, 24742, 9496], [17655, 31224, 6177, 28146, 38076, 20374, 30989, 25479, 13043, 12227, 14242, 0, 5877, 12355, 18083, 17499, 26216, 24289, 19156, 17838, 46206, 37990, 12397], [21525, 35094, 4863, 32016, 41947, 19060, 29676, 29350, 16914, 16098, 18113, 5992, 0, 16226, 21953, 21369, 30086, 28159, 19051, 21708, 50077, 41861, 16268], [13519, 17868, 20422, 20758, 24721, 15181, 12676, 21343, 1223, 1059, 9676, 11972, 16706, 0, 13947, 13363, 22080, 20153, 5903, 13702, 32851, 33979, 577], [893, 27217, 23367, 13816, 35380, 25738, 23335, 11149, 14186, 12641, 5339, 17615, 22350, 14601, 0, 2774, 11886, 9959, 16460, 699, 43510, 21974, 13530], [1993, 24895, 22212, 11494, 34225, 24583, 22180, 8827, 13030, 11486, 6808, 16460, 21195, 13446, 2421, 0, 9564, 7637, 15305, 2176, 40879, 24008, 12375], [9876, 20626, 30076, 7225, 31716, 32447, 20704, 2133, 20895, 19350, 14672, 24324, 29059, 21310, 10304, 9486, 0, 2050, 23169, 10059, 36610, 25308, 20239], [9097, 22095, 29297, 8693, 33185, 31668, 22173, 1535, 20115, 18571, 13893, 23545, 28279, 20530, 9525, 8707, 1900, 0, 22390, 9280, 38079, 25736, 19460], [15961, 19286, 15299, 22176, 26139, 12039, 14094, 23785, 5347, 5507, 14058, 19322, 19237, 6169, 16389, 15805, 24522, 22595, 0, 16144, 34269, 36297, 5523], [841, 27084, 23233, 13682, 35246, 25604, 23201, 11016, 14052, 12507, 5184, 17482, 22216, 14467, 798, 2641, 11752, 9825, 16326, 0, 43376, 21818, 13396], [43037, 17023, 48659, 29861, 25754, 40070, 28364, 37654, 32053, 32580, 41134, 46398, 52597, 32887, 43465, 42881, 37605, 38071, 34139, 43220, 0, 60829, 32240], [22529, 45936, 43019, 32534, 55032, 45390, 42987, 25436, 34541, 33725, 24501, 37267, 42002, 33853, 21925, 24071, 25349, 26778, 36112, 21973, 61920, 0, 33895], [12942, 17291, 19845, 20181, 24144, 14604, 12099, 20767, 646, 993, 9610, 11905, 16640, 646, 13370, 12786, 21503, 19576, 5326, 13125, 32274, 33912, 0]]
        print("distance matrix")
        print(data['distance_matrix'])
        # Create the routing index manager.
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
            
        # transit_callback_index = routing.RegisterUnaryTransitCallback(distance_callback)
        transit_callback_index = routing.RegisterTransitCallback(distance_callback)

        # Define cost of each arc.
        routing.SetArcCostEvaluatorOfAllVehicles(transit_callback_index)
        # Add Distance constraint.
        dimension_name = 'Distance'
        routing.AddDimension(
            transit_callback_index,
            0,  # no slack
            70000,  # vehicle maximum travel distance
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
            ar = jsonify(global_sol)
            return (ar)
        else:
            return("no solution")
    if request.method == 'GET':
        ar = jsonify(global_sol)
        ar.headers.add('Access-Control-Allow-Origin', '*')
        return (ar)

@app.route("/sendLocation", methods=['POST', 'GET'])
def getMatrix():
    if request.method=='POST':
        """Entry point of the program"""
        # Create the data.
        global data
        print (request.is_json)
        content = request.get_json()
        print(content['vehicleLoc'])
        # text_input = request.form["vehicleNo"]
        text_input = content['vehicleLoc']
        text_input = ast.literal_eval(text_input) 
        data['addresses'] = text_input
        numVehicle = content['vehicleNo']
        numVehicle = ast.literal_eval(numVehicle)
        data['num_vehicles'] = numVehicle
        print("type data addr")
        print(type(data['addresses']))
        data = create_data_model()
        addresses = data['addresses']
        API_key = data['API_key']
        distance_matrix = create_distance_matrix(data)
        data['distance_matrix'] = distance_matrix
        print(data['distance_matrix'])
        ar = jsonify([{"route" : "null", "vehicleId" : "null", "distance" : "null"}])
        return (ar)

    if request.method=='GET':
        ar = jsonify([{"route" : "null", "vehicleId" : "null", "distance" : "null"}])
        ar.headers.add('Access-Control-Allow-Origin', '*')
        return (ar)

if __name__ == '__main__':
    app.run(debug= True)


"""Capacited Vehicles Routing Problem (CVRP)."""

from __future__ import print_function
from ortools.constraint_solver import routing_enums_pb2
from ortools.constraint_solver import pywrapcp
from flask import jsonify, Flask, make_response,request, render_template
from flask_restful import Resource, Api
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
api = Api(app)
get_vehicle= 0
def create_data_model():
    """Stores the data for the problem."""
    data = {}
    data['distance_matrix'] = [
        [0, 24392, 33384, 14963, 31992, 32054, 20866, 28427, 15278, 21439, 28765, 34618, 35177, 10612, 26762, 27278],
        [25244, 0, 8314, 10784, 6922, 6984, 10678, 3270, 10707, 7873, 11350, 9548, 10107, 19176, 12139, 13609],
        [34062, 8491, 0, 14086, 4086, 1363, 11008, 4239, 13802, 9627, 7179, 1744, 925, 27994, 9730, 10531],
        [15494, 13289, 13938, 0, 11065, 12608, 4046, 10970, 581, 5226, 10788, 15500, 16059, 5797, 9180, 9450],
        [33351, 7780, 4096, 11348, 0, 2765, 7364, 4464, 11064, 6736, 3619, 4927, 5485, 20823, 6170, 7076],
        [32731, 7160, 1363, 12755, 2755, 0, 9677, 3703, 12471, 8297, 7265, 2279, 2096, 26664, 9816, 9554],
        [19636, 10678, 11017, 4038, 7398, 9687, 0, 9159, 3754, 2809, 7099, 10740, 11253, 8970, 5491, 5928],
        [29097, 3270, 4257, 11458, 4350, 3711, 9159, 0, 11174, 6354, 10160, 5178, 5258, 23029, 10620, 12419],
        [15809, 10707, 13654, 581, 10781, 12324, 3763, 10687, 0, 4943, 10504, 15216, 15775, 5216, 8896, 9166],
        [21831, 7873, 9406, 5226, 6282, 8075, 2809, 6354, 4943, 0, 6967, 10968, 11526, 10159, 5119, 6383],
        [28822, 11931, 6831, 11802, 3305, 6043, 7167, 10627, 11518, 7159, 0, 5361, 6422, 18351, 3267, 4068],
        [35116, 9545, 1771, 15206, 4648, 2518, 10967, 5382, 14922, 10747, 5909, 0, 1342, 29094, 8460, 9260],
        [36058, 10487, 927, 16148, 5590, 2211, 11420, 9183, 15864, 11689, 6734, 1392, 0, 30036, 9285, 10086],
        [11388, 19845, 28838, 5797, 20972, 27507, 8979, 23880, 5216, 10159, 18622, 29331, 29890, 0, 16618, 17135],
        [27151, 11444, 9719, 10131, 6193, 8945, 5913, 10421, 9847, 5374, 3335, 8249, 9309, 16680, 0, 1264],
        [27191, 14469, 10310, 9394, 7093, 9772, 5879, 13164, 9110, 6422, 3933, 8840, 9901, 16720, 1288, 0]
    ]
    
    global get_vehicle
    print("Inside data_model %d", get_vehicle)
    data['demands'] = [0, 1, 1, 2, 4, 2, 4, 8, 8, 1, 2, 1, 2, 4, 4, 8, 8]
    data['vehicle_capacities'] = [15, 15, 15, 15]
    data['num_vehicles'] = 4
    data['depot'] = 0
    return data


def print_solution(data, manager, routing, solution):
    global global_sol
    """Prints solution on console."""
    total_distance = 0
    total_load = 0
    for vehicle_id in range(data['num_vehicles']):
        index = routing.Start(vehicle_id)
        plan_output = 'Route for vehicle {}:\n'.format(vehicle_id)
        route_distance = 0
        route_load = 0
        while not routing.IsEnd(index):
            node_index = manager.IndexToNode(index)
            route_load += data['demands'][node_index]
            plan_output += ' {0} Load({1}) -> '.format(node_index, route_load)
            
            previous_index = index
            index = solution.Value(routing.NextVar(index))
            route_distance += routing.GetArcCostForVehicle(
                previous_index, index, vehicle_id)
            
        plan_output += ' {0} Load({1})\n'.format(manager.IndexToNode(index),
                                                route_load)
        global_sol.append(str(vehicle_id)+":"+plan_output)
        plan_output += 'Distance of the route: {}m\n'.format(route_distance)
        plan_output += 'Load of the route: {}\n'.format(route_load)
        print(plan_output)
        total_distance += route_distance
        total_load += route_load
    print('Total distance of all routes: {}m'.format(total_distance))
    print('Total load of all routes: {}'.format(total_load))


def main():
    """Solve the CVRP problem."""
    # Instantiate the data problem.
    data = create_data_model()

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

    transit_callback_index = routing.RegisterTransitCallback(distance_callback)

    # Define cost of each arc.
    routing.SetArcCostEvaluatorOfAllVehicles(transit_callback_index)


    # Add Capacity constraint.
    def demand_callback(from_index):
        """Returns the demand of the node."""
        # Convert from routing variable Index to demands NodeIndex.
        from_node = manager.IndexToNode(from_index)
        return data['demands'][from_node]

    demand_callback_index = routing.RegisterUnaryTransitCallback(
        demand_callback)
    routing.AddDimensionWithVehicleCapacity(
        demand_callback_index,
        0,  # null capacity slack
        data['vehicle_capacities'],  # vehicle maximum capacities
        True,  # start cumul to zero
        'Capacity')

    # Setting first solution heuristic.
    search_parameters = pywrapcp.DefaultRoutingSearchParameters()
    search_parameters.first_solution_strategy = (
        routing_enums_pb2.FirstSolutionStrategy.PATH_CHEAPEST_ARC)

    # Solve the problem.
    solution = routing.SolveWithParameters(search_parameters)

    # Print solution on console.
    if solution:
        print_solution(data, manager, routing, solution)

@app.route("/", methods=['POST', 'GET'])
def get():
        data = {
                "data" : global_sol
         }
        # print(data)
        return make_response(data)
@app.route("/getVehicleData", methods=['POST','GET'])
def post():
    
    global get_vehicle
    get_vehicle = request.form["data"]
    print(get_vehicle)
    return make_response("hey")


global_sol = []


if __name__ == '__main__':
    main()
    app.run(debug= True)
    
    
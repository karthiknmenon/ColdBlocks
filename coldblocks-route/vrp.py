""" Vehicles Routing Problem (VRP)."""
from __future__ import print_function
from ortools.constraint_solver import routing_enums_pb2
from ortools.constraint_solver import pywrapcp
from flask import jsonify, Flask, make_response,request, render_template
from flask_restful import Resource, Api
from flask_cors import CORS
import json
app = Flask(__name__)
CORS(app)
api = Api(app)
get_vehicle= 0

def create_data_model():
    """Stores the data for the problem."""
    data = {}
    data['distance_matrix'] = [
        [0, 83, 93, 129, 133, 139, 151, 169, 135, 114, 110, 98, 99, 95, 81, 152, 159, 181, 172, 185, 147, 157, 185, 220, 127, 181],
        [83, 0, 40, 53, 62, 64, 91, 116, 93, 84, 95, 98, 89, 68, 67, 127, 156, 175, 152, 165, 160, 180, 223, 268, 179, 197],
        [93, 40, 0, 42, 42, 49, 59, 81, 54, 44, 58, 64, 54, 31, 36, 86, 117, 135, 112, 125, 124, 147, 193, 241, 157, 161],
        [129, 53, 42, 0, 11, 11, 46, 72, 65, 70, 88, 100, 89, 66, 76, 102, 142, 156, 127, 139, 155, 180, 228, 278, 197, 190],
        [133, 62, 42, 11, 0, 9, 35, 61, 55, 62, 82, 95, 84, 62, 74, 93, 133, 146, 117, 128, 148, 173, 222, 272, 194, 182],
        [139, 64, 49, 11, 9, 0, 39, 65, 63, 71, 90, 103, 92, 71, 82, 100, 141, 153, 124, 135, 156, 181, 230, 280, 202, 190],
        [151, 91, 59, 46, 35, 39, 0, 26, 34, 52, 71, 88, 77, 63, 78, 66, 110, 119, 88, 98, 130, 156, 206, 257, 188, 160],
        [169, 116, 81, 72, 61, 65, 26, 0, 37, 59, 75, 92, 83, 76, 91, 54, 98, 103, 70, 78, 122, 148, 198, 250, 188, 148],
        [135, 93, 54, 65, 55, 63, 34, 37, 0, 22, 39, 56, 47, 40, 55, 37, 78, 91, 62, 74, 96, 122, 172, 223, 155, 128],
        [114, 84, 44, 70, 62, 71, 52, 59, 22, 0, 20, 36, 26, 20, 34, 43, 74, 91, 68, 82, 86, 111, 160, 210, 136, 121],
        [110, 95, 58, 88, 82, 90, 71, 75, 39, 20, 0, 18, 11, 27, 32, 42, 61, 80, 64, 77, 68, 92, 140, 190, 116, 103],
        [98, 98, 64, 100, 95, 103, 88, 92, 56, 36, 18, 0, 11, 34, 31, 56, 63, 85, 75, 87, 62, 83, 129, 178, 100, 99],
        [99, 89, 54, 89, 84, 92, 77, 83, 47, 26, 11, 11, 0, 23, 24, 53, 68, 89, 74, 87, 71, 93, 140, 189, 111, 107],
        [95, 68, 31, 66, 62, 71, 63, 76, 40, 20, 27, 34, 23, 0, 15, 62, 87, 106, 87, 100, 93, 116, 163, 212, 132, 130],
        [81, 67, 36, 76, 74, 82, 78, 91, 55, 34, 32, 31, 24, 15, 0, 73, 92, 112, 96, 109, 93, 113, 158, 205, 122, 130],
        [152, 127, 86, 102, 93, 100, 66, 54, 37, 43, 42, 56, 53, 62, 73, 0, 44, 54, 26, 39, 68, 94, 144, 196, 139, 95],
        [159, 156, 117, 142, 133, 141, 110, 98, 78, 74, 61, 63, 68, 87, 92, 44, 0, 22, 34, 38, 30, 53, 102, 154, 109, 51],
        [181, 175, 135, 156, 146, 153, 119, 103, 91, 91, 80, 85, 89, 106, 112, 54, 22, 0, 33, 29, 46, 64, 107, 157, 125, 51],
        [172, 152, 112, 127, 117, 124, 88, 70, 62, 68, 64, 75, 74, 87, 96, 26, 34, 33, 0, 13, 63, 87, 135, 186, 141, 81],
        [185, 165, 125, 139, 128, 135, 98, 78, 74, 82, 77, 87, 87, 100, 109, 39, 38, 29, 13, 0, 68, 90, 136, 186, 148, 79],
        [147, 160, 124, 155, 148, 156, 130, 122, 96, 86, 68, 62, 71, 93, 93, 68, 30, 46, 63, 68, 0, 26, 77, 128, 80, 37],
        [157, 180, 147, 180, 173, 181, 156, 148, 122, 111, 92, 83, 93, 116, 113, 94, 53, 64, 87, 90, 26, 0, 50, 102, 65, 27],
        [185, 223, 193, 228, 222, 230, 206, 198, 172, 160, 140, 129, 140, 163, 158, 144, 102, 107, 135, 136, 77, 50, 0, 51, 64, 58],
        [220, 268, 241, 278, 272, 280, 257, 250, 223, 210, 190, 178, 189, 212, 205, 196, 154, 157, 186, 186, 128, 102, 51, 0, 93, 107],
        [127, 179, 157, 197, 194, 202, 188, 188, 155, 136, 116, 100, 111, 132, 122, 139, 109, 125, 141, 148, 80, 65, 64, 93, 0, 90],
        [181, 197, 161, 190, 182, 190, 160, 148, 128, 121, 103, 99, 107, 130, 130, 95, 51, 51, 81, 79, 37, 27, 58, 107, 90, 0],
    ]
    # data['num_vehicles'] = 1
    data['num_vehicles'] = 1
    data['depot'] = 0
    return data


def print_solution(data, manager, routing, solution):
    global global_sol
    global jsonData
    global_sol = []
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
        max_route_distance = max(route_distance, max_route_distance)
        sol_dict = {"route" : str(plan_output)}
        # print(sol_dict)
        jsonDataParsed.update(sol_dict)  
        # jsonData = json.dumps(jsonDataParsed)        
        global_sol.append(jsonDataParsed)
        print("JSON data")
        print(jsonDataParsed)
        print("global array")
        print(global_sol)   
    print('Maximum of the route distances: {}m'.format(max_route_distance))




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


@app.route("/", methods=['POST', 'GET'])
def get():
        # print(data)
        # sti = '\''+global_sol+'\''
        # sti = str(global_sol)
        # sti = '[{"$class":"org.coldblocks.mynetwork.TransitPackage","packageID":"H001","location":"Govt. Engineering College, Thrissur, Viyyur - Thanikkudam Road, Thrissur, Thanikkudam - 680009, Kerala, India","temperature":"32","destination":"RSET","holder":"S01","status":"0"},{"$class":"org.coldblocks.mynetwork.TransitPackage","packageID":"H002","location":"undefined","temperature":"undefined","destination":"RSET","holder":"S01","status":"1"}]'
        ar = jsonify(global_sol)
        return (ar)

@app.route("/getVehicleData", methods=['POST'])
def post():
    text_input = request.form["vehicleNo"]
    with open('data.txt', 'w') as data_file:
            data_file.write(text_input)
    # return jsonify({'message': 'Data saved sucessfully!'}), 200
    text_input = None
    with open('data.txt', 'r') as data_file:
            text_input = data_file.read()
    # print(text_input)
    main()
    return make_response("hey")


global_sol = []


if __name__ == '__main__':
    app.run(debug= True)



"""
[[0, 24211, 33350, 14928], [25244, 0, 8314, 10784], [34062, 8491, 0, 14086], [15494, 11580, 14024, 0]]
# dataset for 16 cities 
[
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

    https://people.sc.fsu.edu/~jburkardt/datasets/tsp/tsp.html
"""
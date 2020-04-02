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
CORS(app, resources={r"/": {"origins": "http://localhost:3001"}})
api = Api(app)
get_vehicle= 0


def create_data():
  """Creates the data."""
  data = {}
  data['API_key'] = 'AIzaSyCTkzOzDdOn1vBbnVvLcf9WYuiypjtFO08'
  data['addresses'] = ["Sector 11, CBD Belapur Navi Mumbai, Maharashtra 400614","Palava Lakeshore Greens, Usarghar Gaon, Thane, Maharashtra, India","Rajhans Co-operative Housing Society, Best Colony, Mankur, Mumbai, Maharashtra, India","Mangala Residency, Sector 24, Taloja Panchanand, Taloja, Navi Mumbai, Maharashtra, India","Sai Arcade Building, Shivaji Nagar, Kopargaon, Dombivli West, Dombivli, Maharashtra, India","Kaushalya Medical Foundation Trust Hospital, opp. Nitin Company, Ramabai Ambedkar Nagar, Ganeshwadi, Thane West, Thane, Maharashtra, India","Mumbra, Thane, Maharashtra, India","Today Pearl Co-Operative Housing Society, Sector 24, Kamothe, Panvel, Navi Mumbai, Maharashtra, India","twins hallmark, Sector 19A, Sector 20, Kopar Khairane, Navi Mumbai, Maharashtra, India","Sector 8, Kopar Khairane, Navi Mumbai, Maharashtra, India","Nerul Railway Station (W), Nerul East, Nerul West, Nerul, Navi Mumbai, Maharashtra","New Mhada Colony, Dr.Babsaheb Ambedker Nagar, Govandi East, Mumbai, Maharashtra 400043, India","Kolekar Hospital %26 ICCU, Chembur Gaothan, Chembur, Mumbai, Maharashtra, India","Sector 15, Kopar Khairane, Navi Mumbai, Maharashtra 400709, India","Shahabaz Village, Sector 20, CBD Belapur, Navi Mumbai, Maharashtra, India","Sector 5, CBD Belapur, Navi Mumbai, Maharashtra, India","Shree Dattamandir Naupada Village, Kamothe, Panvel, Navi Mumbai, Maharashtra 410206","Sector 10, Kamothe, Panvel, Navi Mumbai, Maharashtra, India","Prisha Apartment, Gothivali Village, Sector 30, Ghansoli, Navi Mumbai, Maharashtra, India","Diwale Koliwada Bus Stop, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra, India","Gaondevi Mandir, Badlapur E, Anand Nagar, Gaodevi, Badlapur, Maharashtra, India","Koproli Bus Stand, Koproli, Maharashtra, India","Kopar Khairane, Navi Mumbai, Maharashtra, India"]                                 
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

########
# Main #
########
def main():
  """Entry point of the program"""
  # Create the data.
  data = create_data()
  addresses = data['addresses']
  API_key = data['API_key']
  distance_matrix = create_distance_matrix(data)
  print(distance_matrix)
if __name__ == '__main__':
  main()

# @app.route("/", methods=['POST', 'GET'])

# def get():  
#         main()
#         # ar = jsonify(global_sol)
#         return ("hey")


if __name__ == '__main__':
    # app.run(debug= True)
    main()
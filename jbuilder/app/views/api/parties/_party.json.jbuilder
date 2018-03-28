
json.extract! party, :name, :location

json.guests do
  json.array! party.guests do |guest|
    # Grab Guest Ids only
    json.partial! 'api/guests/guest', guest: guest
    json.gifts guest.gifts.each do |gift|
      json.partial! 'api/gifts/gift', gift: gift
    end
  end
end




# {
#   parties_table{
#     "name": "Secret Santa Extravaganza",
#     "location": "Portland",
#     "guests": [
#
#     ]
#     },
#     {
#     "name": "Charles' Christmas Party",
#     "location": "San Francisco",
#     "guests": [
#
#     ]
#     },
#   guest_table {
#     {
#     "name": "John Smith",
#     "age": 45,
#     "favoriteColor": "Blue"
#     },
#     {
#     "name": "Jane Doe",
#     "age": 47,
#     "favoriteColor": "Green"
#     },
#     {
#     "name": "Josh Brown",
#     "age": 22,
#     "favoriteColor": "Brown"
#     },
#     {
#     "name": "Helen White",
#     "age": 25,
#     "favoriteColor": "White"
#     },
#     {
#     "name": "Job Bluth",
#     "age": 41,
#     "favoriteColor": "Red"
#     },
#     {
#     "name": "Josh Brown",
#     "age": 22,
#     "favoriteColor": "Brown"
#     },
#     {
#     "name": "Helen White",
#     "age": 25,
#     "favoriteColor": "White"
#     }
#   }
# }

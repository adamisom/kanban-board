# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Board.destroy_all

board1 = Board.create({title: "First board"})
list1 = List.create({title: "List 1"})
list2 = List.create({title: "List 2"})
card1 = Card.create({title: "Card 1", description: "Card Description 1"})
card2 = Card.create({title: "Card 2", description: "Card Description 2"})
card3 = Card.create({title: "Card 3", description: "Card Description 3"})
card4 = Card.create({title: "Card 4", description: "Card Description 4"})
card5 = Card.create({title: "Card 5", description: "Card Description 5"})




# board2 = Board.create({title: "Second board"})

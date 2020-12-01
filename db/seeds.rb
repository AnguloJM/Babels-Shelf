# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Favorite.destroy_all
Book.destroy_all
User.destroy_all

@user = User.create!(username: 'Geoff', email: 'Geoff@phoenix.com', password: '12345678')

puts"#{User.count} users created!"

@book1 = Book.create!(img_url: 'https://i.imgur.com/XqzcRgh.jpg', title: 'The Kite Runner', author: 'Khalid Hosseini', genre: 'Novel, Drama, Bildungsroman, Historical Fiction', user: @user)
@book2 = Book.create!(img_url: 'https://i.imgur.com/SHyLncH.jpg', title: 'A Thousand Splendid Suns', author: 'Khalid Hosseini', genre: 'Novel, Fiction', user: @user)
@book3 = Book.create!(img_url: 'https://i.imgur.com/boC7io3.jpg', title: 'Flowers for Algernon', author: 'Daniel Keyes', genre: 'Science Fiction', user: @user)
@book4 = Book.create!(img_url: 'https://i.imgur.com/bg3LNUS.jpg', title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki, Sharon Letcher', genre: 'Self-Help Book', user: @user)
@book5 = Book.create!(img_url: 'https://i.imgur.com/xJ7HB8q.jpg', title: 'The Child Thief', author: 'Gerald Brom', genre: 'Fairytale, Novel, Horror Fiction, Dark Fantasy, Fantasy, Fiction', user: @user)
@book6 = Book.create!(img_url: 'https://i.imgur.com/7qvdXcd.jpg', title: 'The Four Agreements', author: 'Don Miguel Ruiz', genre: 'Self-Help Book', user: @user)
@book7 = Book.create!(img_url: 'https://i.imgur.com/uJu1LYG.jpg', title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Novel, Drama, Quest, Fantasy Fiction, Adventure Fiction', user: @user)
@book8 = Book.create!(img_url: 'https://i.imgur.com/UsSNiUr.jpg', title: 'The Power of Habit', author: 'Charles Duhigg', genre: 'Self-Help Book', user: @user)

puts "#{Book.count} books created!"

@favorite1 = Favorite.create!(user: @user, book: @book1)
@favorite2 = Favorite.create!(user: @user, book: @book2)
@favorite3 = Favorite.create!(user: @user, book: @book3)

puts "#{Favorite.count} favorites created!"
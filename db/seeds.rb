# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

theaters = Theater.create([
    {name: 'Sala 1'}, 
    {name: 'Sala 2'}, 
    {name: 'Sala 3'},
    {name: 'Sala 4'},
    {name: 'Sala 5'},
    {name: 'Sala 6'},
    {name: 'Sala 7'},
    {name: 'Sala 8'},
    ])

movies = Movie.create([
    {name: "John Wick", url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/john-wick-3-parabellum-1558685041.jpg?crop=1.00xw:0.893xh;0,0&resize=640:*"},
    {name: "The lord of the rings", url: "https://imagenes.heraldo.es/files/image_990_v1/files/fp/uploads/imagenes/2016/05/30/_senordelosanillos_c666ad3e.r_d.320-210.jpg"},
    {name: "Dead poets society", url: "https://m.media-amazon.com/images/I/51ztQFlIHjL._AC_.jpg"},
    {name: "Good Will Hunting", url: "https://ievenn.com/wp-content/uploads/good-will-hunting-1997-ievenn-2.jpg"},
    {name: "The Dark Knight", url: "https://larepublica.pe/resizer/Qe11xUE9SX8euEF9b85d3AxqdC8=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/TLBIGOIGTFGCBIU4TECGW7KOLA.jpg"},
    {name: "Attack on Tittan", url: "https://as.com/meristation/imagenes/2021/01/25/noticias/1611576361_977797_1611576540_sumario_grande.jpg"},
])

users = User.create([
    {name: "Mushu", email: "tu.peor.pesadilla@mulan.cl"},
    {name: "Pedro Picapiedas", email: "pp@rock.com"},
    {name: "yo", email: "yo@yo.yo"}
])

# schedules = Schedule.create([
#     {hour: "matine", movie_id: 1, theater_id: 1},
#     {hour: "matine", movie_id: 1, theater_id: 2},
#     {hour: "tanda", movie_id: 1, theater_id: 1},
#     {hour: "matine", movie_id: 2, theater_id: 1}
# ])
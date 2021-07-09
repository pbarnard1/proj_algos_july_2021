class Movie():
    def __init__(self, title, genre, year, company, time_length):
        self.title = title
        self.genre = genre
        self.year = year
        self.production_company = company
        self.duration = time_length # length of movie in minutes
        self.cast = []

    def add_cast_member(self, new_cast_member):
        self.cast.append(new_cast_member)
        return self

# Instance of a movie
my_movie = Movie("Iron Man","Action",2008,"Marvel",140)
my_movie.add_cast_member("Terrence Howard").add_cast_member("Gwyneth Paltrow").add_cast_member("Samuel L. Jackson")

# Create another one
second_movie = Movie("Titanic","Romance",1996,"20th Century Fox",210)
import java.util.ArrayList;

public class Movie {
    private String title;
    private String genre;
    private int year;
    private String production_company;
    private int duration;
    private ArrayList<String> cast;

    public Movie(String title, String genre, int year, String company, int time_length) {
        this.title = title;
        this.genre = genre;
        this.year = year;
        this.production_company = company;
        this.duration = time_length;
        this.cast = new ArrayList<String>();
    }

    public void addCastMember(String newCastMember) {
        cast.add(newCastMember);
    }
}

/* In another file with the main class:
public static void main(String[] args) {
    Movie myMovie = new Movie("Titanic","Romance",1996,"20th Century Fox",210); /// Creating a movie
}
*/
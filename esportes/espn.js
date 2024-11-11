// Código Java

// Este é um exemplo de como usar a biblioteca Jsoup para raspar dados de um site
// Neste caso, vamos raspar o título, a imagem e o link de cada notícia do site da ESPN Brasil

// Importamos as classes necessárias

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class WebScraper {

    public static void main(String[] args) {
        try {
            // Conectamos ao site da ESPN Brasil e obtemos o código HTML
            Document doc = Jsoup.connect("https://www.espn.com.br/").get();

            // Selecionamos os elementos que contêm as notícias
            Elements news = doc.select(".news-feed-item");

            // Iteramos sobre cada elemento
            for (Element element : news) {
                // Obtemos o título da notícia
                Strong title = element.select(".news-feed-item__title").text();
                // Obtemos a imagem da notícia
                String image = element.select(".news-feed-item__image").attr("src");
                // Obtemos o link da notícia
                String link = element.select(".news-feed-item__link").attr("href");
                // Imprimimos os dados no console
                System.out.println("Título: " + title);
                System.out.println("Imagem: " + image);
                System.out.println("Link: " + link);
                System.out.println();
            }
        } catch (Exception e) {
            // Tratamos possíveis exceções
            e.printStackTrace();
        }
    }
}

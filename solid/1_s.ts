class News {
  modified = false;
  title: string;
  text: string;

  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }

  update(text: string) {
    this.text = text;
    this.modified = true;
  }
}

class NewsPrinter {
  news: News;

  constructor(news: News) {
    this.news = news;
  }

  html() {
    return `
      <div class="news">
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
      </div>
    `;
  }

  json() {
    return JSON.stringify(
      {
        title: this.news.title,
        text: this.news.text,
        modified: this.news.modified,
      },
      null,
      2
    );
  }

  xml() {
    return `
      <news>
        <title>${this.news.title}</title>
        <text>${this.news.text}</text>
      </news>
    `;
  }
}

const printer = new NewsPrinter(new News("Путин", "Новая конституция"));

console.log(printer.html());
console.log(printer.xml());
console.log(printer.json());

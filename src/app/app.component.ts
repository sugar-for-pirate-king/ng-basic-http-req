import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  loading: boolean;
  posts: Post[];
  data: any;

  constructor(private http: HttpClient) {
    this.posts = [];
  }

  requestHttp(): void {
    this.loading = true;
    this.http
      .get("https://jsonplaceholder.typicode.com/posts")
      .subscribe(data => {
        this.data = data;
        this.data.forEach(element => {
          this.posts.push(new Post(element.title, element.body));
        });
        console.log(this.posts);
        this.loading = false;
      });
  }

  clearData(): void {
    this.posts = [];
  }
}

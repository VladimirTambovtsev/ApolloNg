import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const submitRepository = gql`
  mutation(
    $title: String!
    $author: String!
    $description: String!
    $topic: String!
  ) {
    addCourse(
      title: $title
      author: $author
      description: $description
      topic: $topic
    ) {
      id
      title
      author
      description
      topic
      voteCount
    }
  }
`;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    // this.newRepository();
  }

  newRepository() {
    this.apollo
      .mutate({
        mutation: submitRepository,
        variables: {
          title: 'title 1',
          author: 'author 1',
          description: 'description1',
          topic: 'topic1'
        }
      })
      .subscribe(
        ({ data }) => {
          console.log('got data', data);
        },
        error => {
          console.log('there was an error sending the query', error);
        }
      );
  }
}

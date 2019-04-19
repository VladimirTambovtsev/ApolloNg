import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Course, Query } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private apollo: Apollo) {}

  getAllCourses(searchTerm: string) {
    return this.apollo
      .watchQuery<Query>({
        pollInterval: 500,
        query: gql`
          query allCourses($searchTerm: String) {
            allCourses(searchTerm: $searchTerm) {
              id
              title
              author
              description
              topic
              url
              voteCount
            }
          }
        `,
        variables: {
          searchTerm
        }
      })
      .valueChanges.pipe(map(result => result.data.allCourses));
  }

  upvoteCourse(id: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation upvote($id: String!) {
          upvote(id: $id) {
            id
            title
            voteCount
          }
        }
      `,
      variables: {
        id
      }
    });
  }

  downvoteCourse(id: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation downvote($id: String!) {
          downvote(id: $id) {
            id
            title
            voteCount
          }
        }
      `,
      variables: {
        id
      }
    });
  }
}

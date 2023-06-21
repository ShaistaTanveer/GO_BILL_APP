import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../manager/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  _courselist: course[];
  _student: student;
  _studentlist: student[] = [];
  uniquekey: number = 0;

  ngOnInit(): void {
    this.getcourses();
    this._student = new student();
  }

  // getcourses() {
  //   this._courselist = [
  //     { id: 1, name: 'C#', isselected: false },
  //     { id: 2, name: 'ASP.NET', isselected: false },
  //     { id: 3, name: 'SQL', isselected: false },
  //     { id: 4, name: 'MVC', isselected: false },
  //     { id: 5, name: 'JQUERY', isselected: false },
  //     { id: 6, name: 'ANGULAR', isselected: false },
  //   ];
  // }

  constructor(
    private http: HttpClient,
    public router: Router,
    public authService: AuthService
  ) {}
  getcourses() {
    this.authService.getMyData().subscribe((response) => {
      console.log(response);
      this._courselist = response.data;
    });
  }

  onchange() {
    console.log(this._courselist);
  }

  onsubmit() {
    let index = this._studentlist.findIndex((x) => x.id == this._student.id);

    this._student.courseid = this._courselist
      .filter((x) => x.isselected == true)
      .map((x) => x.id)
      .join(',')
      .toString();
    this._student.coursename = this._courselist
      .filter((x) => x.isselected == true)
      .map((x) => x.name)
      .join(',')
      .toString();

    if (index == -1) {
      this.uniquekey = this.uniquekey + 1;
      this._student.id = this.uniquekey;
      this._studentlist.push(this._student);
    } else {
      this._studentlist[index] = this._student;
    }

    this._student = new student();
    this.getcourses();
  }

  edit(item: student) {
    let selectedcourseidlist = item.courseid.split(',');
    for (let i = 0; i < selectedcourseidlist.length; i++) {
      this._courselist
        .filter((x) => x.id == Number(selectedcourseidlist[i]))
        .map((x) => (x.isselected = true));
    }
    this._student.name = item.name;
    this._student.id = item.id;
  }
}
class course {
  id: number;
  name: string;
  isselected: boolean;
}

class student {
  id: number;
  name: string;
  courseid: string;
  coursename: string;
}

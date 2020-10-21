import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateService } from '../date.service';
import { Task, TasksService } from '../tasks.service';

@Component({
  selector: 'app-organizzzer',
  templateUrl: './organizzzer.component.html',
  styleUrls: ['./organizzzer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OrganizzzerComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dateService: DateService,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
    });
  }

  submit(): void {
    const { title } = this.form.value;

    const task: Task = {
      title,
      date: this.dateService.date.value.format('DD-MM-YYYY'),
    };

    this.tasksService.create(task).subscribe(
      (task) => {
        console.log(`New task`, task);
        this.form.reset();
      },
      (err) => console.error(err)
    );

    console.log(title);
  }
}

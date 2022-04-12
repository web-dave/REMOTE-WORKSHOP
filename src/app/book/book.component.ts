import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NEVER, Observable, Subscription } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { IBook } from 'src/models/book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {}

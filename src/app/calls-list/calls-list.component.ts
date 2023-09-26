import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from '../dialog/dialog.component';

import { ColDef, GridApi, FirstDataRenderedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-calls-list',
  templateUrl: './calls-list.component.html',
  styleUrls: ['./calls-list.component.css']
})

export class CallsListComponent {
  columnDefs: ColDef[] = [
    {
      field: 'Call Title'
    },
    {
      field: 'Specialty'
    },
    {
      field: 'Created On'
    },
    {
      field: 'Last Updated On'
    },
    {
      field: 'Actions'
    },
  ];

  rowData = [
    {
      "Call Title": "Call for testing 2",
      Specialty: "Neurosurgeon",
      "Created On": "1 Jan 2024",
      "Last Updated On": "1 Jan 2024",
    },
    {
      "Call Title": "Call for testing 1",
      Specialty: "Orthopedic",
      "Created On": "1 Jan 2024",
      "Last Updated On": "1 Jan 2024",
    },
  ];

  defaultColDef: ColDef = {
    resizable: true,  
  };

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //   data: {name: this.name, animal: this.animal},
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}

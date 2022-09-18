import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No servers were created!';
  serverName: string = 'TestServer';
  userName: string = '';
  serverCreated: boolean = false;
  servers: string[] = ['TestServer1'];
  logs: string[] = [];
  displayDetails: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;

    this.servers.push(this.serverName);

    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName() {
    this.userName = '';
  }

  onDisplayDetails() {
    this.displayDetails = this.displayDetails ? false : true;

    this.logs.push(new Date().toString());
  }
}

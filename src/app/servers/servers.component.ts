import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

  allowNewServer=false;
  serverCreationStatus="No server was created!";
  serverName='TestServer';
  serverCreated =false;
  servers = ["Testserver","Testserver2"]
  constructor() {
    setTimeout(()=>{
      this.allowNewServer= true;
    },2000);
  }

  ngOnInit(): void {
  }

  onUpdateServer(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  onCreateServer(){
    this.serverCreationStatus='New server was created! Name is' + this.serverName;
    this.serverCreated= true;
    this.servers.push(this.serverName);
  }
}

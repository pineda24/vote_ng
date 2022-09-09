import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'atom-image-container',
  templateUrl: './image-container.atom.html',
  styleUrls: ['./image-container.atom.css']
})
export class ImageContainerAtom implements OnInit {
  /*
    <atom-image-container></atom-image-container>
    Is absolutely necesary set the width and the height by style, property, or class, in the place where is used.
    (Internly the content will adapt to that height and width).

    For set the image position usea object-position: left% top%;
  */
  constructor() { }

  ngOnInit(): void {
  }

}

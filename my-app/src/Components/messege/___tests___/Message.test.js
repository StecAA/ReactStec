
import { Message } from '../';
import { render, screen } from "@testing-library/react";
 import React from 'react';


describe("Message tests", () => {
    it( "render text", () => {
      //   render(<Message text="test"/>);
       const component = render(<Message text="test"/>);
     const text = component.findByText ("test");
     
   //   screen.getByText('test');
     
    expect(text).toBeDefined();
     });
    });
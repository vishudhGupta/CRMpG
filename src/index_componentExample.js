import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import GridExample from './Component/GridExample';
import ContainerExample from './Component/ContainerExample';
import BoxExample from './Component/BoxExample';
import StackExample from './Component/StackExample';  
import PaperExample from './Component/PaperExample';
import AppBarExample from './Component/AppBarExample';
import ToolbarExample from './Component/ToolbarExample';
import DrawerExample from './Component/DrawerExample';


import TextFieldExample from './InputComponents/TextFieldExample';
import CheckboxExample from './InputComponents/CheckboxExample';
import RadioExample from './InputComponents/RadioExample';
import PopoverExample from './UtilityComponents/PopoverExample';
import PopoverExample2 from './UtilityComponents/PopoverExample2';
import DialogExample from './FeedbackComponents/DialogExample';
import SnackbarExample from './FeedbackComponents/SnackbarExample';
import AlertExample from './FeedbackComponents/AlertExample';
import ProgressExample from './FeedbackComponents/ProgressExample';
import TableExample from './DataDisplayComponents/TableExample';
import ListExample from './DataDisplayComponents/ListExample';
import CardExample from './DataDisplayComponents/CardExample';
import AccordionExample from    './DataDisplayComponents/AccordionExample';
import TabsExample from './NavigationComponents/TabsExample';
import BreadcrumbsExample from './NavigationComponents/BreadcrumbsExample';
import LinkExample from './NavigationComponents/LinkExample';
import StepperExample from './NavigationComponents/StepperExample';
import PaginationExample from './NavigationComponents/PaginationExample';

import DatePickerExample from './InputComponents/DatePickerExample';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>



{/* <DatePickerExample/> */}
<br></br>

<PaginationExample/>

<StepperExample/>
<br></br>
<LinkExample/>
<br></br>
<BreadcrumbsExample/>
<TabsExample/>
<AccordionExample/>
<CardExample/>
<ListExample/>
<TableExample/>

<ProgressExample/>
<AlertExample/>

<DialogExample/>
<SnackbarExample/>
<PopoverExample2/>
<PopoverExample/>
<TextFieldExample/>
<RadioExample />
<CheckboxExample/>
    <DrawerExample/>
    <ToolbarExample/>
    <AppBarExample/>
    <App />
    <GridExample/>
    <ContainerExample/>
    <BoxExample/>
    <StackExample/>
    <PaperExample/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

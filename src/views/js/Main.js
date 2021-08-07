import './../scss/Main.scss';
import Element from './../../components/js/Element';
import {useState} from 'react';


export default function Main() {

  const [elements, setElements] = useState([]);
  const [draggingElement, setDraggingElement] = useState('');

  const dropElement = (event) => {
    var newElements = [...elements, draggingElement];
    setElements(newElements);
  }

  return (
    <div className="view-main">
      <div className="view-main--left"
        onDrop={dropElement} onDragOver={(e) => e.preventDefault()}>
        {elements.map((element, i) => {
          return (
            <Element key={i} text={element}/>
          )
        })}
      </div>
      <div className="view-main--right">
        <Element text="Dense"
          dragElementHandler={() => setDraggingElement("Dense")}/>
        <Element text="Activation"
          dragElementHandler={() => setDraggingElement("Activation")}/>
      </div>
    </div>
  )
}
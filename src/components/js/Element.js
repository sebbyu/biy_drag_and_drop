import './../scss/Element.scss';

export default function Element(props) {

  const setDragElement = (event) => {
    props.dragElementHandler();
  }

  return (
    <div className="component-element"
      draggable="true" onDragStart={setDragElement}>
      {props.text}
    </div>
  )
}
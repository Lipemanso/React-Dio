import Item from './components/Item';
import Card from './components/Card';
import Form from './components/Form'
const app = () => {
  return (
  <>
    <h1>Minha primeira aplicação em React</h1>
    <ul>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </ul>
    <Card/>
    <div>
      <Form/>
    </div>
  </>
  )
}

export default app;

// outra forma válida para declarar o app
//export default function app(){
 // return(
//    <h1>Hello world</h1>
//  )
//}
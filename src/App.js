import './App.css';
import { Component } from 'react';

class App extends Component{

  state={
    posts:
    [
    {
    id:'1',
    matricula:'78745467',
    nome:'Isabelly Lescano',
    curso:'Técnico em Informática para Internet',
    turma:'6B'
    },
    {
      id:'2',
      matricula:'7895648978',
      nome:'Laura Pegorari',
      curso:'Técnico em Informática para Internet',
      turma:'6B'
    },
    
    {
    id:'3',
    matricula:'035645564',
    nome:'Emilly Ferro ',
    curso:'Técnico em Informática para Internet',
    turma:'6B'
    }
    ]
    }
    render()
    {
      const{posts}=this.state;

    return(
    <div className='App'>
    {posts.map(post=>(
    <div key={post.id}>
    <h1>{post.matricula}</h1>
    <p>{post.nome}</p>
    <p>{post.curso}</p>
    <p>{post.turma}</p>
    </div>
    ))}
    </div>
    )
  }
}

export default App;

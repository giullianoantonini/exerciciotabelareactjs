import React from "react";
import "./App.css";

interface Course {
  id: number;
  name: string;
  description: string;
  instructor: string;
}

const courses: Course[] = [
  {
    id: 1,
    name: "React",
    description: "Curso de react",
    instructor: "Luciel",
  },
  {
    id: 2,
    name: "CSS",
    description: "Curso de CSS",
    instructor: "Sabino",
  },
  {
    id: 3,
    name: "JS e CSS Pro",
    description: "Curso avançado de JS e CSS",
    instructor: "Sabino",
  },
  {
    id: 4,
    name: "Javascript básico",
    description: "JS básico",
    instructor: "Cícero",
  },
];

function App() {
  return (
    <div className="App">
      <div className="divTabela">
        <h2>Tabela de Cursos</h2>
        <table>
          <thead>
            <tr>
              <th>Curso</th>
              <th>Descrição</th>
              <th>Instrutor</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>{course.instructor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

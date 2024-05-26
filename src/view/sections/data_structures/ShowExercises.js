import { 
    Select, 
    SelectContent, 
    SelectGroup, 
    SelectItem, 
    SelectLabel, 
    SelectTrigger, 
    SelectValue 
} from "../../../components/ui/select";
import { problemDS as Problems } from "../../constants/problems";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
/*
 * Topics of exercise.
 */
const topics = [
    { value: "arrays", label: "Arrays", },
    { value: "listsingle", label: "Listas Enlazadas", },
    { value: "listdouble", label: "Listas doblemente enlazadas", },
    { value: "listcircu", label: "Listas Circulares", },
    { value: "stacks", label: "Stacks", },
    { value: "queues", label: "Queues", },
    { value: "trees", label: "Trees", },
    { value: "graphs", label: "Grafos", }
];

export function ShowExercises({
    handleName,
    filter
}) {
    
    
    return (
        <>
        <section className="grid gap-10 grid-cols-1 w-full">
            <Select onValueChange={(e) => handleName(e)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Seleccionar tema" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Temas</SelectLabel>
                        {topics.map((topic, index) => (
                            <SelectItem
                                key={index}
                                value={topic.value}>
                                {topic.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <div>
                <TableProblems
                    filter={filter} 
                />
            </div>
        </section>
        </>
    );
}

function TableProblems({
    filter
}) {

    const filterProblems = filter ? Problems.filter(problem => problem.value === filter) : Problems;

    function sendName(idExercise) {
        var id = idExercise.replace('btn-','')
        localStorage.setItem('idExercise', id);
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead><b>N°</b></TableHead>
                    <TableHead className="w-[200px]"><b>Título</b></TableHead>
                    <TableHead><b>Tema</b></TableHead>
                    <TableHead><b>Dificultad</b></TableHead>
                    <TableHead><b>Estado</b></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filterProblems.map((problem, index) => (
                    <TableRow key={`${index}`}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                            <Link to={`/poo/tosolve/${problem.title.toLowerCase().replace(' ', '')}`}>
                                <Button onClick={(e) => sendName(e.target.id)}
                                    id={`btn-${problem.title.toLowerCase().replace(' ','')}`}
                                    variant="ghost">
                                    {problem.title}
                                </Button>
                            </Link>
                        </TableCell>
                        <TableCell>
                            <b>{problem.tema}</b>
                        </TableCell>
                        <TableCell className="text-green-600">
                            {problem.difficulty}
                        </TableCell>
                        <TableCell>
                            <svg 
                            width="25" 
                            height="25" 
                            viewBox="0 0 15 15" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-green-600">
                                <path d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
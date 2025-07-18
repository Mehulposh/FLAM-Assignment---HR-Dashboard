import EmployeeCard from "@/components/EmployeeCard/EmployeeCard";
import SearchBar from "@/components/SearchBar/SearchBar";
import { getEmployees } from "@/lib/api";

export default async function Home() {
  const employees = await getEmployees();
 
  return (
    <main>
      <div>
        <SearchBar />

      </div>
      <div className="flex flex-wrap gap-4 p-3">
        {employees.map(emp => (
          <EmployeeCard key={emp.id} employee={emp}/>
        ))}
      </div>
    </main>
  );
}

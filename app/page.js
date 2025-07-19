"use client"
import EmployeeCard from "@/components/EmployeeCard/EmployeeCard";
import Filter from "@/components/FilterDropdown/Filter";
import SearchBar from "@/components/SearchBar/SearchBar";
import useEmployeeStore from "@/store/EmployeeStore";
import { useEffect } from "react";

export default  function Home() {

  const {filteredEmployees,fetchEmployees,filterEmployees} = useEmployeeStore();
  
  
  useEffect( () => {
    fetchEmployees();

  },[fetchEmployees])

  const handleFilter = ({departments,ratings}) => {
    filterEmployees({departments,ratings});
  }
 
  return (
    <main>
      <div className="flex items-start justify-start gap-4 w-[80%] mt-5 mb-5">
        <SearchBar />
        <Filter onChange={handleFilter} />

      </div>
      <div className="flex flex-wrap gap-4 p-3">
        {filteredEmployees.map(emp => (
          <EmployeeCard key={emp.id} employee={emp}/>
        ))}
      </div>
    </main>
  );
}

"use client"
import EmployeeCard from "@/components/EmployeeCard/EmployeeCard";
import Filter from "@/components/FilterDropdown/Filter";
import SearchBar from "@/components/SearchBar/SearchBar";
import useEmployeeStore from "@/store/EmployeeStore";
import Modal from '@/components/Modal/Modal'
import { useEffect, useState } from "react";
import NewEmployee from "@/components/NewUser/NewEmployee";
import Button from "@/components/Button/Button";

export default  function Home() {

  const {filteredEmployees,fetchEmployees,filterEmployees} = useEmployeeStore();
  const [isOpen,setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  
  
  useEffect( () => {
    fetchEmployees();

  },[fetchEmployees])

  const handleFilter = ({departments,ratings}) => {
    filterEmployees({departments,ratings});
  }
 
  return (
    <main >
      <div className="w-full px-4 mt-5 mb-5">
        <div className="flex flex-col gap-4 md:flex-col md:items-center md:justify-between max-w-4xl mx-auto">
          <div className="w-full md:flex-1 md:max-w-md">
            <SearchBar />
          </div>
          <div className="w-full md:w-auto md:min-w-[250px]">
            <Filter onChange={handleFilter} />
          </div>
        </div>
      </div>
      <div>
        <Button onClick={openModal} className='m-5'>Add Employee</Button>
      </div>
      <div className="flex flex-wrap gap-4 p-5">
        
        {filteredEmployees.map(emp => (
          <EmployeeCard key={emp.id} employee={emp}/>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <NewEmployee closeModal={closeModal}/>
      </Modal>

    </main>
  );
}

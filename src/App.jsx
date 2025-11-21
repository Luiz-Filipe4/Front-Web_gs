import React, { useState, useEffect } from 'react';
import perfisData from './data/perfis.json'; 

function App() {

  const [profiles] = useState(perfisData); 
  const [filteredProfiles, setFilteredProfiles] = useState(perfisData);
  
  const [setSelectedProfile] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterArea, setFilterArea] = useState("");

  // Lógica de Filtro (Busca e Select)
  useEffect(() => {
    const results = profiles.filter(profile => {
      // Busca no nome ou nas skills técnicas
      const matchesSearch = 
        profile.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
        profile.habilidadesTecnicas.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Busca pela área
      const matchesArea = filterArea ? profile.area === filterArea : true;
      
      return matchesSearch && matchesArea;
    });
    setFilteredProfiles(results);
  }, [searchTerm, filterArea, profiles]);

  // Lógica Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 transition-colors duration-300">
      
      {/* Header e Botão Dark Mode */}
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Rede de Profissionais</h1>
        <button 
          onClick={toggleDarkMode}
          className="bg-gray-800 dark:bg-yellow-500 text-white dark:text-gray-900 px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all hover:opacity-90"
        >
          {darkMode ? ' Light Mode' : ' Dark Mode'}
        </button>
      </header>

      {/* Filtros */}
      <div className="max-w-7xl mx-auto mb-8 grid gap-4 md:grid-cols-2">
        <input 
          type="text"
          placeholder="Buscar por nome ou habilidade..."
          className="p-4 rounded-lg border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          className="p-4 rounded-lg border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={(e) => setFilterArea(e.target.value)}
        >
          <option value="">Todas as Áreas</option>
          <option value="Desenvolvimento">Desenvolvimento</option>
          <option value="Design">Design</option>
          <option value="Dados">Dados</option>
        </select>
      </div>

      {/* Grid de Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map(profile => (
            <ProfileCard 
              key={profile.Id} 
              profile={profile} 
              onOpen={setSelectedProfile} 
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-xl mt-10">Nenhum profissional encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default App;
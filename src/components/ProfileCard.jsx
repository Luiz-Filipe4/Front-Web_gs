import React from 'react';

const ProfileCard = ({ profile, onOpen }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center">
      <img 
        src={profile.foto} 
        alt={profile.nome} 
        className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4 object-cover"
      />
      <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center">{profile.nome}</h2>
      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{profile.cargo}</p>
      <div className="flex flex-wrap gap-2 justify-center mt-2">
        {profile.habilidadesTecnicas.slice(0, 3).map((skill, index) => (
          <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>
      <button 
        onClick={() => onOpen(profile)}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full w-full transition-colors"
      >
        Ver Perfil
      </button>
    </div>
  );
};

export default ProfileCard;
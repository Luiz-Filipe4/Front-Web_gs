import React from 'react';

const ProfileModal = ({ profile, onClose }) => {
  if (!profile) return null;

  const handleAction = (action) => {
    alert(`${action} enviada com sucesso para ${profile.nome}!`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        {/* Botão Fechar */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold">
          &times;
        </button>

        <div className="p-8">
          {/* Cabeçalho */}
          <div className="flex items-center gap-6 mb-6 border-b pb-6 dark:border-gray-700">
            <img src={profile.foto} alt={profile.nome} className="w-32 h-32 rounded-full" />
            <div>
              <h2 className="text-3xl font-bold dark:text-white">{profile.nome}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">{profile.cargo}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{profile.localizacao}</p>
            </div>
          </div>

          {/* Corpo das informações */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2 text-blue-600">Sobre</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{profile.resumo}</p>
              
              <h3 className="font-bold text-lg mb-2 text-blue-600">Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {profile.habilidadesTecnicas.map(skill => (
                   <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{skill}</span>
                ))}
              </div>
            </div>

            <div>
               <h3 className="font-bold text-lg mb-2 text-blue-600">Experiência</h3>
               {profile.experiencias.map((exp, i) => (
                 <div key={i} className="mb-2 dark:text-gray-300">
                   <p className="font-bold">{exp.empresa}</p>
                   <p className="text-sm">{exp.cargo} ({exp.inicio} - {exp.fim})</p>
                 </div>
               ))}
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-4 mt-8 pt-6 border-t dark:border-gray-700">
            <button onClick={() => handleAction('Recomendação')} className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold">
              Recomendar
            </button>
            <button onClick={() => handleAction('Mensagem')} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold">
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
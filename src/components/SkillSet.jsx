import { Terminal, Database, DatabaseZap, BrainCircuit, Brain, BarChart3  } from 'lucide-react';

function SkillBar({ name, percentage }) {
  return (
    <li className="flex items-center justify-between">
      <span className="w-16 text-sm text-gray-600">{name}</span>
      <div className="flex-1 mx-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-indigo-600 h-2.5 rounded-full" style={{width: `${percentage}%`}}></div>
        </div>
      </div>
      {/* <span className="w-6 text-sm text-gray-600 text-right">{percentage}%</span> */}
    </li>
  );
}

function SkillSet() {
  return (
    <section className="py-4 m-4 rounded-3xl bg-gray-50 border shadow-xl">
      <div className="container bg-gray- rounded-3xl shadow-lg mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Technical Skills</h2>
        <div className="max-w-4xl pb-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-lg border-transparent shadow-xl">
            <h3 className="font-semibold mb-4 flex items-center">
              <Terminal className="w-5 h-5 mr-2 text-indigo-600" />
              Backend Development
            </h3>
            <ul className="space-y-2">
              <SkillBar name="Python" percentage={100} />
              <SkillBar name="Django" percentage={100} />
              <SkillBar name="FASTApi" percentage={100} />
              <SkillBar name="Streamlit" percentage={100} />
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border-transparent shadow-xl">
            <h3 className="font-semibold mb-4 flex items-center">
              <Database className="w-5 h-5 mr-2 text-indigo-600" />
              Databases & Tools
            </h3>
            <ul className="space-y-2">
              <SkillBar name="MySQL" percentage={100} />
              <SkillBar name="PostgreSQL" percentage={100} />
              <SkillBar name="SQL" percentage={100} />
              <SkillBar name="Docker" percentage={100} />
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border-transparent shadow-xl">
            <h3 className="font-semibold mb-4 flex items-center">
              <BrainCircuit className="w-5 h-5 mr-2 text-indigo-600" />
              Deep Learning
            </h3>
            <ul className="space-y-2">
              <SkillBar name="PyTorch" percentage={100} />
              <SkillBar name="TensorFlow" percentage={100} />
              <SkillBar name="Keras" percentage={100} />
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border-transparent shadow-xl">
            <h3 className="font-semibold mb-4 flex items-center">
              <DatabaseZap  className="w-5 h-5 mr-2 text-indigo-600" />
              Data Analysis
            </h3>
            <ul className="space-y-2">
              <SkillBar name="Pandas" percentage={100} />
              <SkillBar name="NumPy" percentage={100} />
              <SkillBar name="Matplotlib" percentage={100} />
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border-transparent shadow-xl">
            <h3 className="font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-indigo-600" />
              LLM
            </h3>
            <ul className="space-y-2">
              <SkillBar name="LangChain" percentage={100} />
              <SkillBar name="NLTK" percentage={100} />
              <SkillBar name="smallAI" percentage={100} />
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border-transparent shadow-xl">
            <h3 className="font-semibold mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-indigo-600" />
              Microsoft BI Stack:
            </h3>
            <ul className="space-y-2">
              <SkillBar name="PowerBI" percentage={100} />
              <SkillBar name="SSRS" percentage={100} />
              <SkillBar name="SSIS" percentage={100} />
              <SkillBar name="SSAS" percentage={100} />
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SkillSet;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const [activeTab, setActiveTab] = useState('allCandidates');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };
  const renderContent = () => {
    switch (activeTab) {
      case 'allCandidates':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-2">All Candidates</h3>
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 border-b">Candidate Name</th>
                  <th className="py-2 px-4 border-b">Candidate Email</th>
                  <th className="py-2 px-4 border-b">Candidate Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">John Doe</td>
                  <td className="py-2 px-4 border-b">john.doe@example.com</td>
                  <td className="py-2 px-4 border-b">Software Engineer</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Jane Smith</td>
                  <td className="py-2 px-4 border-b">jane.smith@example.com</td>
                  <td className="py-2 px-4 border-b">Front End Developer</td>
                </tr>
                {/* Insert more sample data rows here */}
              </tbody>
            </table>
          </div>
        );

      case 'scheduling':
        return (
           <div>
            <h3 className="text-xl font-semibold mb-2">schedulin</h3>
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 border-b">Candidate Name</th>
                  <th className="py-2 px-4 border-b">Candidate Email</th>
                  <th className="py-2 px-4 border-b">Candidate Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">John Doe</td>
                  <td className="py-2 px-4 border-b">john.doe@example.com</td>
                  <td className="py-2 px-4 border-b">Software Engineer</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Jane Smith</td>
                  <td className="py-2 px-4 border-b">jane.smith@example.com</td>
                  <td className="py-2 px-4 border-b">Front End Developer</td>
                </tr>
                {/* Insert more sample data rows here */}
              </tbody>
            </table>
          </div>
        );

      case 'softwareEngineering':
        return (
          <div>
          <h3 className="text-xl font-semibold mb-2">All Candidates</h3>
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b">Candidate Name</th>
                <th className="py-2 px-4 border-b">Candidate Email</th>
                <th className="py-2 px-4 border-b">Candidate Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">John Doe</td>
                <td className="py-2 px-4 border-b">john.doe@example.com</td>
                <td className="py-2 px-4 border-b">Software Engineer</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Jane Smith</td>
                <td className="py-2 px-4 border-b">jane.smith@example.com</td>
                <td className="py-2 px-4 border-b">Front End Developer</td>
              </tr>
              {/* Insert more sample data rows here */}
            </tbody>
          </table>
        </div>
        );

      case 'sqa':
        return (
          <div>
          <h3 className="text-xl font-semibold mb-2">All Candidates</h3>
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b">Candidate Name</th>
                <th className="py-2 px-4 border-b">Candidate Email</th>
                <th className="py-2 px-4 border-b">Candidate Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">John Doe</td>
                <td className="py-2 px-4 border-b">john.doe@example.com</td>
                <td className="py-2 px-4 border-b">Software Engineer</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Jane Smith</td>
                <td className="py-2 px-4 border-b">jane.smith@example.com</td>
                <td className="py-2 px-4 border-b">Front End Developer</td>
              </tr>
              {/* Insert more sample data rows here */}
            </tbody>
          </table>
        </div>
        );

      case 'backendEngineering':
        return (
          <div>
          <h3 className="text-xl font-semibold mb-2">All Candidates</h3>
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b">Candidate Name</th>
                <th className="py-2 px-4 border-b">Candidate Email</th>
                <th className="py-2 px-4 border-b">Candidate Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">John Doe</td>
                <td className="py-2 px-4 border-b">john.doe@example.com</td>
                <td className="py-2 px-4 border-b">Software Engineer</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Jane Smith</td>
                <td className="py-2 px-4 border-b">jane.smith@example.com</td>
                <td className="py-2 px-4 border-b">Front End Developer</td>
              </tr>
              {/* Insert more sample data rows here */}
            </tbody>
          </table>
        </div>
        );

      case 'frontendEngineering':
        return (
          <div>
          <h3 className="text-xl font-semibold mb-2">All Candidates</h3>
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b">Candidate Name</th>
                <th className="py-2 px-4 border-b">Candidate Email</th>
                <th className="py-2 px-4 border-b">Candidate Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">John Doe</td>
                <td className="py-2 px-4 border-b">john.doe@example.com</td>
                <td className="py-2 px-4 border-b">Software Engineer</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Jane Smith</td>
                <td className="py-2 px-4 border-b">jane.smith@example.com</td>
                <td className="py-2 px-4 border-b">Front End Developer</td>
              </tr>
              {/* Insert more sample data rows here */}
            </tbody>
          </table>
        </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="mx-auto bg-grey-400">
      <div className="min-h-screen flex flex-col">
        <header className="bg-nav">
          <div className="flex justify-between">
            <div className="p-1 mx-3 inline-flex items-center">
              <i className="fas fa-bars pr-2 text-white" onClick={toggleSidebar}></i>
              <h1 className="text-white p-2">Logo</h1>
            </div>
            <div className="p-1 mt-5 mr-5 flex flex-row items-center">
              <img
                onClick={toggleProfileDropdown}
                className="inline-block h-12 w-12 rounded-full"
                src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png"
                alt=""
              />
              {profileDropdownVisible && (
                <div
                  id="ProfileDropDown"
                  className="rounded shadow-md bg-white absolute pin-t mt-12 mr-1 pin-r"
                >
                  <ul className="list-reset">
                    <li>
                      <hr className="border-t mx-2 border-gray-200" />
                    </li>
                    <Link to="/">
                      <li>
                        <button className="no-underline px-4 py-2 block text-black hover:bg-gray-200">
                          Logout
                        </button>
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="flex flex-1">
          <aside
            id="sidebar"
            className={`bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav ${
              sidebarVisible ? '' : 'hidden'
            } md:block lg:block`}
          >
            <ul className="list-reset flex flex-col">
              <li
                className={`w-full h-full py-3 px-2 border-b border-light-border bg-white ${
                  activeTab === 'allCandidates' ? 'bg-gray-200' : ''
                }`}
              >
                <button
                  className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
                  onClick={() => handleTabChange('allCandidates')}
                >
                  All Candidates
                </button>
              </li>
              <li
                className={`w-full h-full py-3 px-2 border-b border-light-border bg-white ${
                  activeTab === 'scheduling' ? 'bg-gray-200' : ''
                }`}
              >
                <button
                  className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
                  onClick={() => handleTabChange('scheduling')}
                >
                  Scheduling
                </button>
              </li>
              <li
                className={`w-full h-full py-3 px-2 border-b border-light-border bg-white ${
                  activeTab === 'softwareEngineering' ? 'bg-gray-200' : ''
                }`}
              >
                <button
                  className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
                  onClick={() => handleTabChange('softwareEngineering')}
                >
                  Software Engineering Candidates
                </button>
              </li>
              <li
                className={`w-full h-full py-3 px-2 border-b border-light-border bg-white ${
                  activeTab === 'sqa' ? 'bg-gray-200' : ''
                }`}
              >
                <button
                  className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
                  onClick={() => handleTabChange('sqa')}
                >
                  SQA Candidates
                </button>
              </li>
              <li
                className={`w-full h-full py-3 px-2 border-b border-light-border bg-white ${
                  activeTab === 'backendEngineering' ? 'bg-gray-200' : ''
                }`}
              >
                <button
                  className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
                  onClick={() => handleTabChange('backendEngineering')}
                >
                  Backend Engineering Candidates
                </button>
              </li>
              <li
                className={`w-full h-full py-3 px-2 border-b border-light-border bg-white ${
                  activeTab === 'frontendEngineering' ? 'bg-gray-200' : ''
                }`}
              >
                <button
                  className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
                  onClick={() => handleTabChange('frontendEngineering')}
                >
                  Front End Engineering Candidates
                </button>
              </li>
            </ul>
          </aside>

          <div className="flex-1 p-4">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

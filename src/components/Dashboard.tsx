import React from 'react';  
import Header from './Header';  
import Sidebar from './Sidebar';  
import MainContent from './MainContent';  
import styled from 'styled-components';  

const DashboardContainer = styled.div`  
    display: flex;  
    height: 100vh;  
`;  

const Dashboard: React.FC = () => {  
    return (  
        <DashboardContainer>  
            <Sidebar />  
            <div style={{ flex: 1 }}>  
                <Header />  
                <MainContent />  
            </div>  
        </DashboardContainer>  
    );  
};  

export default Dashboard;
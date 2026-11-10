import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./Sidebar";
import styled from "styled-components";
import Spinner from "./Spinner";
import { useFreshSampleData } from "../data/useFreshSampleData";

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function AppLayout() {
  // On a visitor's first load, make sure the sample bookings are current
  const { isRefreshing } = useFreshSampleData();

  if (isRefreshing)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;

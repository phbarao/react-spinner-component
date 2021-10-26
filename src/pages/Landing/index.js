import { Spinner } from "../../components/Spinner";

import { Container } from "./styles";

export function Landing() {
  return (
    <Container>
      <Spinner iconSize={40} iconColor="orange" speed="1.8s" timing="linear" />
    </Container>
  );
}

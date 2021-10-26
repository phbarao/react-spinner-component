import { ImSpinner3 } from "react-icons/im";

import { Container } from "./styles";

export function Spinner({ iconSize, iconColor, speed, timing }) {
  return (
    <Container data-testid="spinner" speed={speed} timing={timing}>
      <ImSpinner3 size={iconSize} color={iconColor} />
    </Container>
  );
}

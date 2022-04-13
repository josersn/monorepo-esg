import styled from 'styled-components';
import { Colors } from '../../shared/DesignTokens';

export const Container = styled.div`
  justify-content: center;
  display: flex;
  width: 90%;
  align-items: center;
  border-bottom: solid 1px ${Colors.LIGHT_GRAY};
  .card-header {
      width: 10%;
  }
  .card-body {
      width: 80%;
      padding: 0 2rem;
      h2 {
        margin-bottom: 10px;
        width: 100%;
      }
      p {
        margin-bottom: 10px;
        width: 100%;
      }

  }
`;
import styled from 'styled-components';

export const FormularioContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Select = styled.select`
  font-size: 16px;
  padding: 8px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #ccc;
`;

export const TableRow = styled.tr`
  background-color: #f2f2f2;
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;

export const TableHeading = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  background-color: #007bff;
  color: white;
`;

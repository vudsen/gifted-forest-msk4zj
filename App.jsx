import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@heroui/react";


const TableSkeletons = ({ count = 5 }) => {
  return (
    <div className="mt-5 box-border w-full space-y-3">
      {Array.from({ length: count }).map((_, idx) => (
        <Skeleton className="rounded-lg" key={idx}>
          <div className="bg-default-300 h-10 w-full rounded-lg" />
        </Skeleton>
      ))}
    </div>
  )
}

export default function App() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}


import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Component() {
    return (
        <div className="w-full overflow-auto ml-2 mt-2">
            <Table>
                <TableHeader className=" bg-slate-200">
                    <TableRow>
                        <TableHead className="w-[200px]">Username</TableHead>
                        <TableHead>Language</TableHead>
                        <TableHead>Stdin</TableHead>
                        <TableHead>Timestamp</TableHead>
                        <TableHead className="w-[500px]">Source Code</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="flex items-center space-x-2">
                            <img
                                alt="User avatar"
                                className="rounded-full"
                                height="32"
                                src={`https://robohash.org/coda92`}
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width="32"
                            />
                            <span className="font-medium">johndoe</span>
                        </TableCell>
                        <TableCell>JavaScript</TableCell>
                        <TableCell>2,4,6,8,10</TableCell>
                        <TableCell>2023-08-15T10:30:00Z</TableCell>
                        <TableCell>2023-08-15T10:30:00Z 2023-08-15T10:30:00Z2023-08-15T10:30:00Z2023-08-15T10:30:00Z2023-08-15T10</TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell className="flex items-center space-x-2">
                            <img
                                alt="User avatar"
                                className="rounded-full"
                                height="32"
                                src={`https://robohash.org/coda52`}
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width="32"
                            />
                            <span className="font-medium">alicecodez</span>
                        </TableCell>
                        <TableCell>Python</TableCell>
                        <TableCell>1,3,5,7,9</TableCell>
                        <TableCell>2023-08-15T10:35:00Z</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="flex items-center space-x-2">
                            <img
                                alt="User avatar"
                                className="rounded-full"
                                height="32"
                                src={`https://robohash.org/coda6`}
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width="32"
                            />
                            <span className="font-medium">scriptmaster</span>
                        </TableCell>
                        <TableCell>Node.js</TableCell>
                        <TableCell>hello,world</TableCell>
                        <TableCell>2023-08-15T10:40:00Z</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="flex items-center space-x-2">
                            <img
                                alt="User avatar"
                                className="rounded-full"
                                height="32"
                                src={`https://robohash.org/coda`}
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width="32"
                            />
                            <span className="font-medium">code_ninja</span>
                        </TableCell>
                        <TableCell>Java</TableCell>
                        <TableCell>{`public static void main(String[] args) {}`}</TableCell>
                        <TableCell>2023-08-15T10:45:00Z</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="flex items-center space-x-2">
                            <img
                                alt="User avatar"
                                className="rounded-full"
                                height="32"
                                src={`https://robohash.org/coda1`}

                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width="32"
                            />
                            <span className="font-medium">coding_queen</span>
                        </TableCell>
                        <TableCell>C++</TableCell>
                        <TableCell>using namespace std;</TableCell>
                        <TableCell>2023-08-15T10:50:00Z</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}


'use client'

import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { useEffect, useState } from "react"

// @ts-ignore
import { encode, decode } from 'base-64';


export default function Component() {


    const [submissions, setSubmissions] = useState([{ username: 'loading...', language: 'loading...', stdin: 'loading...', timestamp: 'loading...', sourceCode: 'loading...', stdout: 'loading...' }]);


    async function getSubmissions() {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/submissions`);
            const data = await res.json();
            console.log(data);

            let decodedSubmissions = data.map((submission: any) => {

                // create a time object from the timestamp
                let time = new Date(submission.timestamp);
                // offset the time by 5:30 hours
                time.setHours(time.getHours() + 5);
                time.setMinutes(time.getMinutes() + 30);
                // format the time
                submission.timestamp = time.toLocaleString();

                return {
                    username: submission.username,
                    language: submission.language,
                    stdin: decode(submission.stdin),
                    timestamp: submission.timestamp,
                    sourceCode: decode(submission.sourcecode),
                    stdout: decode(submission.stdout),
                }
            });

            setSubmissions(decodedSubmissions);

        } catch (error) {
            alert(error)
            console.log('error', error);
        }
    }

    useEffect(() => {
        getSubmissions();
    }, []);

    return (
        <div className="w-full overflow-auto ml-2 mt-2">
            <Table>
                <TableHeader className=" bg-slate-200">
                    <TableRow>
                        <TableHead className="w-[200px]">Username</TableHead>
                        <TableHead>Language</TableHead>
                        <TableHead>Stdin</TableHead>
                        <TableHead>Timestamp</TableHead>
                        <TableHead>Stdout</TableHead>
                        <TableHead className="w-[500px]">Source Code</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        submissions.map((submission: any) => {
                            return (
                                <TableRow>
                                    <TableCell className="flex items-center space-x-2">
                                        <img
                                            alt="User avatar"
                                            className="rounded-full"
                                            height="32"
                                            src={`https://robohash.org/${submission.username}`}
                                            style={{
                                                aspectRatio: "32/32",
                                                objectFit: "cover",
                                            }}
                                            width="32"
                                        />
                                        <span className="font-medium">{submission.username}</span>
                                    </TableCell>
                                    <TableCell>{submission.language}</TableCell>
                                    <TableCell>{submission.stdin}</TableCell>
                                    <TableCell>{submission.timestamp}</TableCell>
                                    <TableCell>{submission.stdout.substring(0, 95)}</TableCell>
                                    <TableCell>{submission.sourceCode.substring(0, 100)}</TableCell>

                                </TableRow>
                            )
                        })}

                </TableBody>
            </Table>
        </div>
    )
}


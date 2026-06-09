#!/usr/bin/env python3
import sys, os, http.server, socketserver


class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


port = int(os.environ.get("PORT", "8080"))
args = sys.argv[1:]
for i, a in enumerate(args):
    if a == "--port" and i+1 < len(args):
        port = int(args[i+1])
    elif a.startswith("--port="):
        port = int(a.split("=",1)[1])
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), "public"))
handler = http.server.SimpleHTTPRequestHandler

while True:
    try:
        with ReusableTCPServer(("0.0.0.0", port), handler) as httpd:
            print(f"Serving public/ on :{port}")
            httpd.serve_forever()
        break
    except OSError as exc:
        if exc.errno != 98:
            raise
        port += 1

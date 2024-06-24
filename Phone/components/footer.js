class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        
        
.footer {
    /* height: 333px; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-footer);
  }
  .footer-nosi {
    color: white;
  }
  
  .footer-nosi:hover {
    color: black !important;
  
    transition: color 0.35s ease;
    text-decoration: underline !important;
  }
  .logo-footer {
    display: inline-block;
    left: 0;
  }
  #logo_download{
    /*display: table-row;*/
  }
        </style>
        <div class="footer pt-5">
      <div class="container">
        <div
          class="flex-sm-column footer-flex flex-lg-row justify-content-center align-content-center flex-sm-wrap"
        >
          <div class="col-lg-4 justify-content-center" id="logo_download">
            <div class="logo-footer d-flex text-left p-lg-5 py-3">
              <a class="konekta-footer-icon" href="/">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU4IiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMTU4IDI3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMCA0LjMxOTI3QzAgNC4zMTkyNyA1LjQzNjQzIDYuODExNzcgOC42MDgwMSA3LjQzMjk3TDE0LjU1MzcgMTcuNjgyN0wyMC4zODU3IDcuNjAyNzRDMjAuMzg1NyA3LjYwMjc0IDI3LjUxOTggNS42MjE0NyAyOC45MzU4IDQuMzE5MjdMMTcuMzI3OSAyNC42NDlDMTcuMzI3OSAyNC42NDkgMTYuODE4NiAyNi4yNjE4IDE0LjcyMzUgMjYuMzMzMkMxMi42Mjg0IDI2LjQwNDYgMTEuOTQ5NCAyNC44MTg4IDExLjk0OTQgMjQuODE4OEwwIDQuMzE5MjdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMC4yODE2MTYgMy4yNDI3OEMwLjI4MTYxNiAzLjI0Mjc4IDYuNzA3NzIgNy4zNTM4NyAxNC40NjY5IDcuMjA3MjVDMjIuMjI2MSA3LjA2MDYzIDI4LjkzNTcgMy41MjYzNyAyOC45MzU3IDMuNTI2MzdDMjguOTM1NyAzLjUyNjM3IDI4Ljc5MyAwLjQwNjg4NyAyOC4xOTg4IDAuMDE1MjYyNkgyMi42NDg2QzIyLjY0ODYgMC4wMTUyNjI2IDIxLjk2OTUgMC4wMTUyNjE0IDIxLjkxMTYgMC44NjQxMDJDMjEuOTExNiAwLjg2NDEwMiAyMS43OTc4IDEuOTk2NTMgMjAuNjA5NCAyLjI4MDEyQzIwLjYwOTQgMi4yODAxMiAxNi40NzUyIDIuOTAzMjUgMTQuNjA3NyAyLjg0NzNDMTIuNzM4MyAyLjc5MTM1IDguODMxNzUgMi4zMzc5OSA4LjgzMTc1IDIuMzM3OTlDOC44MzE3NSAyLjMzNzk5IDcuOTM4NTQgMi4zMTY3NyA3LjQyNzMgMS40ODMzN0M3LjQyNzMgMS40ODMzNyA3LjQ2NzgxIDAuMjA2MjUyIDYuNTEwOTQgMC4wMTUyNjI2SDEuNTgzODFDMS41ODM4MSAwLjAxNTI2MjYgMC43OTA5MjIgLTAuMTU0NTA5IDAuNjIxMTU0IDAuNjM4Mzg1TDAuMjgxNjE2IDMuMjQyNzhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzUuMDEwOSA0LjYxOTc1SDM1LjI3NDRDMzYuMDA4OSA0LjYxOTc1IDM2LjQyMzggNS4xMjQyMyAzNi41MjQ3IDYuMTMzMTdWMTUuODUyN0w0OC41NDQ5IDQuNzU0MjhDNDguODMwOSA0LjY2NDYgNDkuMDI3MSA0LjYyNTM2IDQ5LjEzMzYgNC42MjUzNkg0OS4zOTcxQzUwLjE4NzYgNC43ODc5MSA1MC41ODAxIDUuMTg1ODggNTAuNTgwMSA1LjgwODA3VjYuMDcxNTFDNTAuNTgwMSA2LjU4NzIgNDkuNzg5NiA3LjQ4NDA0IDQ4LjIxNDIgOC43NjIwNEw0MS45NzQyIDE0LjYwODNWMTQuNjc1NkM0OC4wMjkxIDIwLjk1OTEgNTEuMDk1OSAyNC4yMjEzIDUxLjE3NDQgMjQuNDYyM0M1MS4xNzQ0IDI0LjU3NDUgNTEuMTk2OCAyNC43NDgyIDUxLjI0MTYgMjQuOTg5MkM1MS4wMzQyIDI1Ljg2MzcgNTAuNTk2OSAyNi4zMDA5IDQ5LjkyOTcgMjYuMzAwOUM0OS4zMDc0IDI2LjMwMDkgNDguNDI3MiAyNS42MDAyIDQ3LjMwMDMgMjQuMTk4OUwzOS44NzczIDE2LjUxNDFMMzYuNTI0NyAxOS43MzE1VjI0Ljc4NzVDMzYuNDIzOCAyNS43OTY0IDM2LjAwODkgMjYuMzAwOSAzNS4yNzQ0IDI2LjMwMDlIMzUuMDEwOUMzNC4yNzY1IDI2LjMwMDkgMzMuODYxNiAyNS43OTY0IDMzLjc2MDcgMjQuNzg3NVY2LjEzMzE3QzMzLjg2MTYgNS4xMjQyMyAzNC4yNzY1IDQuNjE5NzUgMzUuMDEwOSA0LjYxOTc1Wk02MS4yMjY4IDguOTQxNEM2NS4yOTE1IDguOTQxNCA2OC4wNDk4IDExLjA4MjYgNjkuNTA3NSAxNS4zNjVDNjkuNjQ3NyAxNS45ODcyIDY5Ljc1OTggMTYuNzE1OSA2OS44MzgzIDE3LjU1MTFDNjkuODM4MyAyMS42NDg1IDY3LjgwMzIgMjQuNDM5OSA2My43MjcyIDI1Ljk0MjFDNjIuOTcwNCAyNi4xNjA3IDYyLjIwNzkgMjYuMjcyOCA2MS40NDU0IDI2LjI3MjhINjEuMDAyNUM1Ni45OTM5IDI2LjI3MjggNTQuMjY5MSAyNC4wOTI0IDUyLjgyMjcgMTkuNzM3MUM1Mi42ODI1IDE4LjgyOTEgNTIuNjA5NiAxOC4wNjExIDUyLjYwOTYgMTcuNDM5QzUyLjYwOTYgMTQuMDAyOSA1NC4zMTk2IDExLjM4NTMgNTcuNzMzOSA5LjU5MTYxQzU4Ljk4NDIgOS4xNjU2MSA2MC4xNTAzIDguOTUyNjEgNjEuMjMyNCA4Ljk1MjYxTDYxLjIyNjggOC45NDE0Wk01NS4xMTU3IDE3LjY2MzJDNTUuMTE1NyAyMC42MDU5IDU2LjUzNDEgMjIuNjA3IDU5LjM3MSAyMy42NTUyQzU5Ljk5MzMgMjMuODczOCA2MC42MTU3IDIzLjk4NTkgNjEuMjI2OCAyMy45ODU5QzYzLjcyMTYgMjMuOTg1OSA2NS41NzE4IDIyLjc0NzEgNjYuNzc3MiAyMC4yNzUyQzY3LjEzNiAxOS40NDU2IDY3LjMyMSAxOC41NzEyIDY3LjMyMSAxNy42NjMyQzY3LjMyMSAxNC4zNTYxIDY1LjcyMzIgMTIuMjgyMSA2Mi41Mjc1IDExLjQ0MTNDNjIuMTU3NCAxMS4zNzQxIDYxLjcyMDEgMTEuMzQwNSA2MS4yMzI0IDExLjM0MDVINjAuOTAxNkM1OC4wNjQ3IDExLjM0MDUgNTYuMTY5NyAxMi45NzE2IDU1LjIxNjYgMTYuMjMzOEM1NS4yMTY2IDE2LjU2NDUgNTUuMTgzIDE3LjA0MSA1NS4xMTU3IDE3LjY2MzJaTTgxLjkwMzQgOS4wNDIzQzg1LjIzMzcgOS4wNDIzIDg3LjU5OTYgMTAuNjc5IDg5LjAwMTIgMTMuOTUyNUM4OS4yMTk5IDE0LjczMTYgODkuMzMyIDE1LjM4NzQgODkuMzMyIDE1LjkyNTVWMjUuMzAzMUM4OS4yMzExIDI1Ljk0NzcgODguOTA1OSAyNi4yNzI4IDg4LjM0NTIgMjYuMjcyOEg4Ny45MDIzQzg3LjE3OTEgMjYuMjcyOCA4Ni44MjAzIDI1LjYyMjYgODYuODIwMyAyNC4zMTY2VjE2LjAyNjRDODYuODIwMyAxMy44MDY4IDg1LjQ0MTEgMTIuMjc2NSA4Mi42ODI3IDExLjQ0N0g4MS41ODM4Qzc4LjkyMDggMTEuNDQ3IDc3LjAzMTQgMTIuOTcxNiA3NS45MTU3IDE2LjAyNjRDNzUuNzc1NSAxNi44MTY4IDc1LjcwMjcgMTcuNjUyIDc1LjcwMjcgMTguNTM3NlYyNS4zMDMxQzc1LjYwMTcgMjUuOTQ3NyA3NS4yNzY2IDI2LjI3MjggNzQuNzE1OSAyNi4yNzI4SDc0LjI3M0M3My42MjgzIDI2LjI3MjggNzMuMjYzOSAyNS44NDEyIDczLjE5MSAyNC45NzhWMTAuNjc5QzczLjE5MSA5LjcyNjE0IDczLjYyODMgOS4yNDk2OSA3NC41MDI5IDkuMjQ5NjlDNzUuMzA0NiA5LjI0OTY5IDc1LjcwMjcgOS43MjYxNCA3NS43MDI3IDEwLjY3OVYxMi4yMDM3SDc1LjgwMzZDNzcuMDY1IDEwLjA5MDUgNzkuMTAwMiA5LjAzNjY5IDgxLjkxNDYgOS4wMzY2OUw4MS45MDM0IDkuMDQyM1pNMTAwLjA4NSA5LjE2MDAxSDEwMS4zOTdDMTA0LjU5MyA5LjE2MDAxIDEwNy4wNzEgMTAuOTA4OCAxMDguODIgMTQuNDAwOUMxMDkuMTc5IDE1LjY2MjEgMTA5LjM2NCAxNi44NTYgMTA5LjM2NCAxNy45OTk1QzEwOS4zNjQgMTguNjY2NSAxMDguODkzIDE5LjA2NDUgMTA3Ljk1MSAxOS4xOTlIOTQuODZDOTQuODYgMjAuODE4OSA5NS45ODY5IDIyLjI3MDcgOTguMjQ2MyAyMy41NDg3Qzk5LjA3NiAyMy44NDU4IDk5Ljc5OTMgMjMuOTkxNSAxMDAuNDE2IDIzLjk5MTVIMTAwLjk3N0MxMDIuNjg3IDIzLjk5MTUgMTA0LjIwNiAyMy40NDIyIDEwNS41NCAyMi4zNDkyTDEwNi4xMDEgMjIuMjQ4M0MxMDYuODI0IDIyLjQxMDggMTA3LjE4MyAyMi43NzUyIDEwNy4xODMgMjMuMzMwMUMxMDYuNzc5IDI1LjAwNjEgMTA0Ljc3OCAyNS45ODcgMTAxLjE5IDI2LjI2NzJIMTAwLjY0NkM5Ni42MTQ4IDI2LjI2NzIgOTMuOTYyOSAyNC4yNzE4IDkyLjY3OSAyMC4yNzUyQzkyLjQ2MDQgMTkuNzQ4MyA5Mi4zNDgzIDE5LjAxOTYgOTIuMzQ4MyAxOC4wODkyVjE3LjMzMjVDOTIuMzQ4MyAxMy41NjU3IDk0LjM0NDIgMTAuOTA4OCA5OC4zNDE2IDkuMzY3NEM5OS4xNzEzIDkuMjI3MjcgOTkuNzU0NCA5LjE1NDQgMTAwLjA4NSA5LjE1NDRWOS4xNjAwMVpNOTQuNzQ3OCAxNy4xMjUxSDEwNi45N0MxMDYuOTcgMTQuNzkzMyAxMDUuNjI0IDEzLjAxMDggMTAyLjkyOCAxMS43NzIxQzEwMi4yOTQgMTEuNTUzNSAxMDEuNTY1IDExLjQ0MTMgMTAwLjc0MSAxMS40NDEzQzk3Ljg0ODIgMTEuNDQxMyA5NS45MjUyIDEyLjg5ODcgOTQuOTYwOSAxNS44MDc4Qzk0LjgyMDcgMTYuMzkwOCA5NC43NDc4IDE2LjgyOCA5NC43NDc4IDE3LjExOTVWMTcuMTI1MVpNMTEyLjU5OSA0LjYxOTc1SDExMi44NjJDMTEzLjU5NyA0LjYxOTc1IDExNC4wMTIgNS4xMjQyMyAxMTQuMTEzIDYuMTMzMTdWMTUuODUyN0wxMjYuMTM4IDQuNzU0MjhDMTI2LjQyNCA0LjY2NDYgMTI2LjYyMSA0LjYyNTM2IDEyNi43MjcgNC42MjUzNkgxMjYuOTkxQzEyNy43ODEgNC43ODc5MSAxMjguMTc0IDUuMTg1ODggMTI4LjE3NCA1LjgwODA3VjYuMDcxNTFDMTI4LjE3NCA2LjU4NzIgMTI3LjM4MyA3LjQ4NDA0IDEyNS44MDggOC43NjIwNEwxMTkuNTY4IDE0LjYwODNWMTQuNjc1NkMxMjUuNjIzIDIwLjk1OTEgMTI4LjY4OSAyNC4yMjEzIDEyOC43NjggMjQuNDYyM0MxMjguNzY4IDI0LjU3NDUgMTI4Ljc5IDI0Ljc0ODIgMTI4LjgzNSAyNC45ODkyQzEyOC42MjggMjUuODYzNyAxMjguMTkgMjYuMzAwOSAxMjcuNTIzIDI2LjMwMDlDMTI2LjkwMSAyNi4zMDA5IDEyNi4wMjEgMjUuNjAwMiAxMjQuODk0IDI0LjE5ODlMMTE3LjQ3MSAxNi41MTQxTDExNC4xMTggMTkuNzMxNVYyNC43ODc1QzExNC4wMTcgMjUuNzk2NCAxMTMuNjAyIDI2LjMwMDkgMTEyLjg2OCAyNi4zMDA5SDExMi42MDRDMTExLjg3IDI2LjMwMDkgMTExLjQ1NSAyNS43OTY0IDExMS4zNTQgMjQuNzg3NVY2LjEzMzE3QzExMS40NTUgNS4xMjQyMyAxMTEuODcgNC42MTk3NSAxMTIuNjA0IDQuNjE5NzVIMTEyLjU5OVpNMTMzLjY0IDQuMjQ0MkMxMzQuNDQyIDQuNDE3OTYgMTM0Ljg0IDQuNzgyMzEgMTM0Ljg0IDUuMzI2MDJWOS4yNDk2OUgxMzguNDM5QzEzOS4xNzMgOS4zNjE4IDEzOS41MzggOS42ODY5IDEzOS41MzggMTAuMjM2MlYxMC40NjZDMTM5LjUzOCAxMS4wMTUzIDEzOS4xNzMgMTEuMzM0OCAxMzguNDM5IDExLjQzNTdIMTM0Ljg0VjE5LjE4NzhDMTM0Ljg0IDIyLjE2NDIgMTM1LjI3NyAyMy42NTUyIDEzNi4xNTIgMjMuNjU1MkMxMzYuMTUyIDIzLjgxNzcgMTM2LjQ4MiAyMy45Mjk4IDEzNy4xMzggMjMuOTg1OUMxMzcuNjY1IDIzLjk4NTkgMTM4LjQ5NSAyMy44MDY1IDEzOS42MzMgMjMuNDQyMkgxMzkuNzUxQzE0MC4zMzQgMjMuNzE2OCAxNDAuNjIgMjQuMDc1NiAxNDAuNjIgMjQuNTI0QzE0MC42MiAyNS41MzMgMTM5LjU2NiAyNi4xMTAzIDEzNy40NjkgMjYuMjY3MkgxMzcuMjM5QzEzNS4wNyAyNi4yNjcyIDEzMy41ODQgMjUuMjEzNCAxMzIuNzcxIDIzLjExNzFDMTMyLjU1MiAyMi4xOTc4IDEzMi40NCAyMS4zMjM0IDEzMi40NCAyMC40ODgyVjExLjQzNTdIMTMwLjI1NEMxMjkuNTMgMTEuMzM0OCAxMjkuMTcyIDExLjAxNTMgMTI5LjE3MiAxMC40NjZWMTAuMzQ4M0MxMjkuMjcyIDkuNjE0MDMgMTI5LjYzMSA5LjI0OTY5IDEzMC4yNTQgOS4yNDk2OUgxMzIuNDRWNS40NDM3M0MxMzIuNTggNC42NDIxNyAxMzIuOTg0IDQuMjQ0MiAxMzMuNjQgNC4yNDQyWk0xNTAuMDUgOS4xMDM5NkMxNTIuNDUgOS4xMDM5NiAxNTQuMjY2IDkuOTA1NTEgMTU1LjUwNSAxMS41MDNWMTAuNDA0NEMxNTUuNjA2IDkuNjgxMyAxNTUuOTI2IDkuMzIyNTYgMTU2LjQ3NSA5LjMyMjU2SDE1Ni45MThDMTU3LjU3NCA5LjMyMjU2IDE1Ny45MzggOS43NTk3NyAxNTggMTAuNjM0MlYyNC44MDQzQzE1OCAyNS43NDYgMTU3LjUyOSAyNi4yMTY4IDE1Ni41ODcgMjYuMjE2OEMxNTUuODY0IDI2LjA1NDIgMTU1LjUwNSAyNS42ODk5IDE1NS41MDUgMjUuMTM1VjIzLjcwNTZDMTU0LjA1OSAyNS41MjE3IDE1Mi4yNzYgMjYuNDI5OCAxNTAuMTUxIDI2LjQyOThDMTQ2LjY4MSAyNi40Mjk4IDE0NC4xMzUgMjQuNzIwMiAxNDIuNTE1IDIxLjMwNjZDMTQyLjAxIDIwLjAxNzQgMTQxLjc1OCAxOC44MTc5IDE0MS43NTggMTcuNzA4QzE0MS43NTggMTMuNDI1NiAxNDMuOTA1IDEwLjYyODYgMTQ4LjE5NCA5LjMxNjk2QzE0OS4wMzUgOS4xNzY4MiAxNDkuNjU4IDkuMTAzOTYgMTUwLjA1IDkuMTAzOTZaTTE0NC4yNyAxNy43MDhDMTQ0LjI3IDIwLjYyODQgMTQ1LjY4OCAyMi42Njg3IDE0OC41MjUgMjMuODE3N0MxNDkuMDc0IDIzLjk1NzkgMTQ5LjU3OSAyNC4wMzA3IDE1MC4wNSAyNC4wMzA3SDE1MC4zODFDMTUzLjE2MiAyNC4wMzA3IDE1NC44NzIgMjIuNDcyNSAxNTUuNTA1IDE5LjM1MDRWMTYuNzIxNUMxNTUuNTA1IDEzLjk1MjUgMTU0LjE5OSAxMi4yNDI5IDE1MS41ODEgMTEuNTk4M0MxNTAuOTU4IDExLjUzMSAxNTAuNDgyIDExLjQ5NzQgMTUwLjE1MSAxMS40OTc0QzE0Ni45ODkgMTEuNDk3NCAxNDUuMDYgMTMuMjA3IDE0NC4zNzEgMTYuNjIwNkwxNDQuMjcgMTcuNzAyNFYxNy43MDhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
                  width="180"
                  height="43.73"
              /></a>                
              </div>
              <div class="row">
                <div class="col-4">
                  <a href="https://play.google.com/">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADy0lEQVR4nO2ZSWgUQRSGKzFxN6AiihIVdwXRKB40QYmGgNvBXTwYRFDQgx4EbzF4SgwRFAQXPOhF3EBR1OAOUVERcQFxR4xR1ASXGLckn1TmtT7bTmacnqR7IP9ppup1TX9Tr169V2VMu5JAwFTgBfAOKAN6mWQU8Ii/VQ2sBdJMMgloFIDPLqB7QJ5JFvFHU4CP/KuzwGgTdiGSzxqmXs3SN6AY6GGSAcQKmAjUSPM5YIdAIQFhHdDBhB1EwdhFb3UImARcVu52C8gxYQexAiYomMNAOjAXeKaATgCDTJhBrIAsD5guwEbgk7R/kfXT3YQVRMG8F7MjFkbaBwD7Vfh+CSwHUkwYQTzc7KgDI33ZwE3lbnYtZZkwglgB4yVqWZ0EOqm+FJmN19LfILPV14QNRME4bnYM6GiUgAygRPYdqw/ABrdd4CBWwDg1M6eAzsYlYJiEbUePgUUmTCBWNmVRbnTaC0bspgN3FJDdYMeasIBYAaOAqhhg0oBVwFux/QnsAvqYMIB4wJxpDkZsewLbBMSqRtKdtMBB5PmRwCsZptxumC3YZquN1NEDID9uADV4k3yOodeMJ4xUok42vReYBzz9jQMHfaU7iQCRcUaombkEdFN9OS6IVGlPF/dySofv4n4ZgYF4uJmNUF2BXKBW2nY7EFpAf2CfbKTIGAVetm0ComamUoa9Lkml1c5oeRiRcqFCuVt5zMlookFkzOFqZpBwG1MySSTdWaKi4fogQWaombC6oNdMlGczgFJZL1YFQblWHlAnw+4BnqusuFk3AVKBlcAbsW8QoNQgFnu+gtgqbQOBJ9JW4RWRiKyNa2oGbwCTgwq/GqLM1ZepYK44MESilS7OKuMuzhIBAswEvspQpc3YaBj77xeqsGzXU5EN135ewhcIMEvVHyVRbDNVCYDMxAHbHu/v68GbFOezcxREcQxF2UXn94iUx9lxv3iiQFzutKUFu96SdjiHfFWS1qf6fnm/IC538oRQeZQtd/3lUa0BAsyOtiZkL7nvOsgbYlpT/AcIMB/4IY9s9ugfI/mRo7u23G2VF48XBFigIIo9qr9ilVZUJ7T6SxSIPQFRJWqRqx5fo46IrM32QK7viALigtik2nNdJyTnW+2ExC8IsFhBFErb0DY/s/ID4oawabikEc7eUSvfmz05CRyESGGjIfS5bqMkev1MmIQLBFiqII4DV32l10GAECn461Vho+8+lgV29xGL1L+9Qp1iOKoL/W2uI/XSbggbmQabZBERt9G6DUwzySZgoRQ7D4HVobxDb5cJt34BNUpZ8j7LUjQAAAAASUVORK5CYII=">          </div>
                  </a>
                </div>
                <div  class="col-4">
                  <a href="https://www.apple.com/app-store/">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACY0lEQVR4nO3ZS4hOYRjA8TPGbaMxJcklG7KQWzKScimXXEpKURJZWCjLWREWwkIhC7OxoCQLYSGZsrJW47qwkMRMQhhGM5Sf3pzFN99czHfOme+cU/PfnnPec/7nvT3v80TRGOnAMrThCY5EZQNzcV9/WqMygR3oNpD9UVnATvwyOAuiMoB5+D6ExAs0RGUADw3NoagMoGUYiQ5MiMoALg8h8Q1LorKAZ4NIhPmyOioTBq5Uj8Lkj4oCGuLNbTkWo2mI+8Lf78QtbMW4quvTsDRuZz4a6yWwClfxaZAhE4bRqfBRFff3m8xBBOtwEW8GaaMbV8J7RktgFu4aOa9xHnuxAXtwAe9qaONeeG+WEuEPfpYPX7A9C4lN6JMvfdiWRmIhfigGHZicRGI8nioGbZiUtDcOKgbnEgnEEo3xqpM37dX7Tq0iK/M28C8iSBcB4HjeFriZSiIWqT5T58GuLESe520hix0dX3OW+J1qkleI5L2T/04tUZAeCTRnIdIlf9ZkIfI4bwucyULket4W+JAoSKwSOaoYtKYV2agY9KRKGYWQeZgUZ715myo3jNuKw8eQBE8qsk/xaA+ppyTDK6wcReIPFiXpldOKxZ2aJWKROehVnN5oSSQSy5xVDK4llohFpsS52zzpxsxUIrHMgZxFDqeWqJCpJe+bJQ8yrTFieg7hfRdmZCZRIbOijqFLT0hLZS5RIbO5DkfhvlAUGjWJCpm1/xlmoQh0CVviGnszZoe6IY7h1TDPdmZyOqxBpgkn4tRRb/zxIR+2GxNH8Px63MB7/MRLnMTU+hiMMUY0Ev4CCQkivlZCFT0AAAAASUVORK5CYII=">
                  </a>
                </div>
                </div>
              <div class="col-lg-4 justify-content-center text-center pt-lg-5 py-3">
            <a href="/privacy-policy">
              <h6 class="text-white py-lg-3">
                PRIVACIDADE &#124; TERMOS DE UTILIZAÇÃO
              </h6>
            </a>
            <p class="text-white py-lg-5 text-center py-sm-2">
              Copyright
              <a class="footer-nosi" href="https://www.nosi.cv" target="_blank"
                >NOSi</a
              >
              2024 &#169;
            </p>
          </div>

          <div class="row col-lg-4 d-flex justify-content-center">
            <ul
              class="row-cols-lg-4 d-inline-flex d-flex pt-lg-5"
              style="width: 50%"
            >
              
              <li class="col social-icons">
                <a href="https://x.com/NOSicv" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    style="fill: #ffffff"
                  >
                    <path
                      d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="col social-icons">
                <a href="https://www.facebook.com/nosicv/" target="_blank">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 11 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2792 11.8125L10.8496 8.01199H7.28306V5.54572C7.28306 4.50598 7.78127 3.49248 9.3786 3.49248H11V0.256758C11 0.256758 9.52863 0 8.12184 0C5.18471 0 3.26486 1.82027 3.26486 5.11547V8.01199H0V11.8125H3.26486V21H7.28306V11.8125H10.2792Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li class="col social-icons">
                <a href="https://www.instagram.com/nosi_epe/" target="_blank">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.50212 4.62864C6.8063 4.62864 4.63185 6.80358 4.63185 9.5C4.63185 12.1964 6.8063 14.3714 9.50212 14.3714C12.1979 14.3714 14.3724 12.1964 14.3724 9.5C14.3724 6.80358 12.1979 4.62864 9.50212 4.62864ZM9.50212 12.667C7.76001 12.667 6.33581 11.2467 6.33581 9.5C6.33581 7.75326 7.75577 6.33298 9.50212 6.33298C11.2485 6.33298 12.6684 7.75326 12.6684 9.5C12.6684 11.2467 11.2442 12.667 9.50212 12.667ZM15.7076 4.42938C15.7076 5.06108 15.1989 5.5656 14.5716 5.5656C13.94 5.5656 13.4356 5.05684 13.4356 4.42938C13.4356 3.80191 13.9443 3.29315 14.5716 3.29315C15.1989 3.29315 15.7076 3.80191 15.7076 4.42938ZM18.9332 5.58256C18.8612 4.06053 18.5136 2.71232 17.3988 1.60153C16.2883 0.49074 14.9404 0.143088 13.4187 0.0667745C11.8504 -0.0222582 7.14964 -0.0222582 5.58132 0.0667745C4.06386 0.138849 2.71595 0.4865 1.60117 1.59729C0.486392 2.70808 0.143056 4.05629 0.0667596 5.57832C-0.0222532 7.14699 -0.0222532 11.8488 0.0667596 13.4174C0.138818 14.9395 0.486392 16.2877 1.60117 17.3985C2.71595 18.5093 4.05962 18.8569 5.58132 18.9332C7.14964 19.0223 11.8504 19.0223 13.4187 18.9332C14.9404 18.8612 16.2883 18.5135 17.3988 17.3985C18.5094 16.2877 18.8569 14.9395 18.9332 13.4174C19.0223 11.8488 19.0223 7.15123 18.9332 5.58256ZM16.9071 15.1006C16.5765 15.9316 15.9365 16.5717 15.1015 16.9067C13.851 17.4027 10.8839 17.2882 9.50212 17.2882C8.1203 17.2882 5.14897 17.3985 3.90279 16.9067C3.072 16.576 2.43196 15.9358 2.0971 15.1006C1.60117 13.8499 1.71562 10.8821 1.71562 9.5C1.71562 8.11787 1.60541 5.14588 2.0971 3.89942C2.42772 3.06845 3.06776 2.42826 3.90279 2.09333C5.15321 1.59729 8.1203 1.71176 9.50212 1.71176C10.8839 1.71176 13.8553 1.60153 15.1015 2.09333C15.9322 2.42402 16.5723 3.06421 16.9071 3.89942C17.4031 5.15012 17.2886 8.11787 17.2886 9.5C17.2886 10.8821 17.4031 13.8541 16.9071 15.1006Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li class="col social-icons">
                <a
                  href="https://www.linkedin.com/company/nosicv/"
                  target="_blank"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.02911 18H0.297321V5.98232H4.02911V18ZM2.16121 4.343C0.967902 4.343 0 3.35458 0 2.16125C8.54116e-09 1.58805 0.227698 1.03833 0.633002 0.633017C1.03831 0.227703 1.58802 0 2.16121 0C2.73439 0 3.2841 0.227703 3.68941 0.633017C4.09471 1.03833 4.32241 1.58805 4.32241 2.16125C4.32241 3.35458 3.35411 4.343 2.16121 4.343ZM17.996 18H14.2722V12.1499C14.2722 10.7556 14.2441 8.96766 12.332 8.96766C10.3918 8.96766 10.0945 10.4824 10.0945 12.0494V18H6.3667V5.98232H9.9458V7.62164H9.99804C10.4963 6.67743 11.7133 5.68097 13.5289 5.68097C17.3057 5.68097 18 8.16808 18 11.3985V18H17.996Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <p
            class="text-white flex-wrap d-flex justify-content-center text-left pt-2"
            >Customer Experience Managment<br>
              (+238) 260 79 73
              email:<a href="mailto:cxm@nosi.cv">cxm@nosi.cv</a>
              
              </p>
              <p class="text-white flex-wrap d-flex justify-content-center text-left pb-5">
                Service Desk: 333 62 73
                email:
              <a href="mailto:helpdesk@nosi.cv">helpdesk@nosi.cv</a>
            </p>

          </div>
        </div>
      </div>
    </div>        
    `;
  }
}
customElements.define("footer-component", Footer);

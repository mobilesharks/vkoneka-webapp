class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<style>
    .header {
      position: absolute;
      top: 0;
      width: 100%;
      padding-top: 20px;
      z-index: 20;
    }
  
    .header-gradient {
      background-image: url("data:image/png;base64,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");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  </style>
  <div class="header header-gradient navbar navbar-expand-lg">
    <div class="container-xxl justify-content-between ps-2">
      <div class="d-inline-flex">
        <a class="navbar-brand konekta-icon" href="/">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU4IiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMTU4IDI3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMCA0LjMxOTI3QzAgNC4zMTkyNyA1LjQzNjQzIDYuODExNzcgOC42MDgwMSA3LjQzMjk3TDE0LjU1MzcgMTcuNjgyN0wyMC4zODU3IDcuNjAyNzRDMjAuMzg1NyA3LjYwMjc0IDI3LjUxOTggNS42MjE0NyAyOC45MzU4IDQuMzE5MjdMMTcuMzI3OSAyNC42NDlDMTcuMzI3OSAyNC42NDkgMTYuODE4NiAyNi4yNjE4IDE0LjcyMzUgMjYuMzMzMkMxMi42Mjg0IDI2LjQwNDYgMTEuOTQ5NCAyNC44MTg4IDExLjk0OTQgMjQuODE4OEwwIDQuMzE5MjdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMC4yODE2MTYgMy4yNDI3OEMwLjI4MTYxNiAzLjI0Mjc4IDYuNzA3NzIgNy4zNTM4NyAxNC40NjY5IDcuMjA3MjVDMjIuMjI2MSA3LjA2MDYzIDI4LjkzNTcgMy41MjYzNyAyOC45MzU3IDMuNTI2MzdDMjguOTM1NyAzLjUyNjM3IDI4Ljc5MyAwLjQwNjg4NyAyOC4xOTg4IDAuMDE1MjYyNkgyMi42NDg2QzIyLjY0ODYgMC4wMTUyNjI2IDIxLjk2OTUgMC4wMTUyNjE0IDIxLjkxMTYgMC44NjQxMDJDMjEuOTExNiAwLjg2NDEwMiAyMS43OTc4IDEuOTk2NTMgMjAuNjA5NCAyLjI4MDEyQzIwLjYwOTQgMi4yODAxMiAxNi40NzUyIDIuOTAzMjUgMTQuNjA3NyAyLjg0NzNDMTIuNzM4MyAyLjc5MTM1IDguODMxNzUgMi4zMzc5OSA4LjgzMTc1IDIuMzM3OTlDOC44MzE3NSAyLjMzNzk5IDcuOTM4NTQgMi4zMTY3NyA3LjQyNzMgMS40ODMzN0M3LjQyNzMgMS40ODMzNyA3LjQ2NzgxIDAuMjA2MjUyIDYuNTEwOTQgMC4wMTUyNjI2SDEuNTgzODFDMS41ODM4MSAwLjAxNTI2MjYgMC43OTA5MjIgLTAuMTU0NTA5IDAuNjIxMTU0IDAuNjM4Mzg1TDAuMjgxNjE2IDMuMjQyNzhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzUuMDEwOSA0LjYxOTc1SDM1LjI3NDRDMzYuMDA4OSA0LjYxOTc1IDM2LjQyMzggNS4xMjQyMyAzNi41MjQ3IDYuMTMzMTdWMTUuODUyN0w0OC41NDQ5IDQuNzU0MjhDNDguODMwOSA0LjY2NDYgNDkuMDI3MSA0LjYyNTM2IDQ5LjEzMzYgNC42MjUzNkg0OS4zOTcxQzUwLjE4NzYgNC43ODc5MSA1MC41ODAxIDUuMTg1ODggNTAuNTgwMSA1LjgwODA3VjYuMDcxNTFDNTAuNTgwMSA2LjU4NzIgNDkuNzg5NiA3LjQ4NDA0IDQ4LjIxNDIgOC43NjIwNEw0MS45NzQyIDE0LjYwODNWMTQuNjc1NkM0OC4wMjkxIDIwLjk1OTEgNTEuMDk1OSAyNC4yMjEzIDUxLjE3NDQgMjQuNDYyM0M1MS4xNzQ0IDI0LjU3NDUgNTEuMTk2OCAyNC43NDgyIDUxLjI0MTYgMjQuOTg5MkM1MS4wMzQyIDI1Ljg2MzcgNTAuNTk2OSAyNi4zMDA5IDQ5LjkyOTcgMjYuMzAwOUM0OS4zMDc0IDI2LjMwMDkgNDguNDI3MiAyNS42MDAyIDQ3LjMwMDMgMjQuMTk4OUwzOS44NzczIDE2LjUxNDFMMzYuNTI0NyAxOS43MzE1VjI0Ljc4NzVDMzYuNDIzOCAyNS43OTY0IDM2LjAwODkgMjYuMzAwOSAzNS4yNzQ0IDI2LjMwMDlIMzUuMDEwOUMzNC4yNzY1IDI2LjMwMDkgMzMuODYxNiAyNS43OTY0IDMzLjc2MDcgMjQuNzg3NVY2LjEzMzE3QzMzLjg2MTYgNS4xMjQyMyAzNC4yNzY1IDQuNjE5NzUgMzUuMDEwOSA0LjYxOTc1Wk02MS4yMjY4IDguOTQxNEM2NS4yOTE1IDguOTQxNCA2OC4wNDk4IDExLjA4MjYgNjkuNTA3NSAxNS4zNjVDNjkuNjQ3NyAxNS45ODcyIDY5Ljc1OTggMTYuNzE1OSA2OS44MzgzIDE3LjU1MTFDNjkuODM4MyAyMS42NDg1IDY3LjgwMzIgMjQuNDM5OSA2My43MjcyIDI1Ljk0MjFDNjIuOTcwNCAyNi4xNjA3IDYyLjIwNzkgMjYuMjcyOCA2MS40NDU0IDI2LjI3MjhINjEuMDAyNUM1Ni45OTM5IDI2LjI3MjggNTQuMjY5MSAyNC4wOTI0IDUyLjgyMjcgMTkuNzM3MUM1Mi42ODI1IDE4LjgyOTEgNTIuNjA5NiAxOC4wNjExIDUyLjYwOTYgMTcuNDM5QzUyLjYwOTYgMTQuMDAyOSA1NC4zMTk2IDExLjM4NTMgNTcuNzMzOSA5LjU5MTYxQzU4Ljk4NDIgOS4xNjU2MSA2MC4xNTAzIDguOTUyNjEgNjEuMjMyNCA4Ljk1MjYxTDYxLjIyNjggOC45NDE0Wk01NS4xMTU3IDE3LjY2MzJDNTUuMTE1NyAyMC42MDU5IDU2LjUzNDEgMjIuNjA3IDU5LjM3MSAyMy42NTUyQzU5Ljk5MzMgMjMuODczOCA2MC42MTU3IDIzLjk4NTkgNjEuMjI2OCAyMy45ODU5QzYzLjcyMTYgMjMuOTg1OSA2NS41NzE4IDIyLjc0NzEgNjYuNzc3MiAyMC4yNzUyQzY3LjEzNiAxOS40NDU2IDY3LjMyMSAxOC41NzEyIDY3LjMyMSAxNy42NjMyQzY3LjMyMSAxNC4zNTYxIDY1LjcyMzIgMTIuMjgyMSA2Mi41Mjc1IDExLjQ0MTNDNjIuMTU3NCAxMS4zNzQxIDYxLjcyMDEgMTEuMzQwNSA2MS4yMzI0IDExLjM0MDVINjAuOTAxNkM1OC4wNjQ3IDExLjM0MDUgNTYuMTY5NyAxMi45NzE2IDU1LjIxNjYgMTYuMjMzOEM1NS4yMTY2IDE2LjU2NDUgNTUuMTgzIDE3LjA0MSA1NS4xMTU3IDE3LjY2MzJaTTgxLjkwMzQgOS4wNDIzQzg1LjIzMzcgOS4wNDIzIDg3LjU5OTYgMTAuNjc5IDg5LjAwMTIgMTMuOTUyNUM4OS4yMTk5IDE0LjczMTYgODkuMzMyIDE1LjM4NzQgODkuMzMyIDE1LjkyNTVWMjUuMzAzMUM4OS4yMzExIDI1Ljk0NzcgODguOTA1OSAyNi4yNzI4IDg4LjM0NTIgMjYuMjcyOEg4Ny45MDIzQzg3LjE3OTEgMjYuMjcyOCA4Ni44MjAzIDI1LjYyMjYgODYuODIwMyAyNC4zMTY2VjE2LjAyNjRDODYuODIwMyAxMy44MDY4IDg1LjQ0MTEgMTIuMjc2NSA4Mi42ODI3IDExLjQ0N0g4MS41ODM4Qzc4LjkyMDggMTEuNDQ3IDc3LjAzMTQgMTIuOTcxNiA3NS45MTU3IDE2LjAyNjRDNzUuNzc1NSAxNi44MTY4IDc1LjcwMjcgMTcuNjUyIDc1LjcwMjcgMTguNTM3NlYyNS4zMDMxQzc1LjYwMTcgMjUuOTQ3NyA3NS4yNzY2IDI2LjI3MjggNzQuNzE1OSAyNi4yNzI4SDc0LjI3M0M3My42MjgzIDI2LjI3MjggNzMuMjYzOSAyNS44NDEyIDczLjE5MSAyNC45NzhWMTAuNjc5QzczLjE5MSA5LjcyNjE0IDczLjYyODMgOS4yNDk2OSA3NC41MDI5IDkuMjQ5NjlDNzUuMzA0NiA5LjI0OTY5IDc1LjcwMjcgOS43MjYxNCA3NS43MDI3IDEwLjY3OVYxMi4yMDM3SDc1LjgwMzZDNzcuMDY1IDEwLjA5MDUgNzkuMTAwMiA5LjAzNjY5IDgxLjkxNDYgOS4wMzY2OUw4MS45MDM0IDkuMDQyM1pNMTAwLjA4NSA5LjE2MDAxSDEwMS4zOTdDMTA0LjU5MyA5LjE2MDAxIDEwNy4wNzEgMTAuOTA4OCAxMDguODIgMTQuNDAwOUMxMDkuMTc5IDE1LjY2MjEgMTA5LjM2NCAxNi44NTYgMTA5LjM2NCAxNy45OTk1QzEwOS4zNjQgMTguNjY2NSAxMDguODkzIDE5LjA2NDUgMTA3Ljk1MSAxOS4xOTlIOTQuODZDOTQuODYgMjAuODE4OSA5NS45ODY5IDIyLjI3MDcgOTguMjQ2MyAyMy41NDg3Qzk5LjA3NiAyMy44NDU4IDk5Ljc5OTMgMjMuOTkxNSAxMDAuNDE2IDIzLjk5MTVIMTAwLjk3N0MxMDIuNjg3IDIzLjk5MTUgMTA0LjIwNiAyMy40NDIyIDEwNS41NCAyMi4zNDkyTDEwNi4xMDEgMjIuMjQ4M0MxMDYuODI0IDIyLjQxMDggMTA3LjE4MyAyMi43NzUyIDEwNy4xODMgMjMuMzMwMUMxMDYuNzc5IDI1LjAwNjEgMTA0Ljc3OCAyNS45ODcgMTAxLjE5IDI2LjI2NzJIMTAwLjY0NkM5Ni42MTQ4IDI2LjI2NzIgOTMuOTYyOSAyNC4yNzE4IDkyLjY3OSAyMC4yNzUyQzkyLjQ2MDQgMTkuNzQ4MyA5Mi4zNDgzIDE5LjAxOTYgOTIuMzQ4MyAxOC4wODkyVjE3LjMzMjVDOTIuMzQ4MyAxMy41NjU3IDk0LjM0NDIgMTAuOTA4OCA5OC4zNDE2IDkuMzY3NEM5OS4xNzEzIDkuMjI3MjcgOTkuNzU0NCA5LjE1NDQgMTAwLjA4NSA5LjE1NDRWOS4xNjAwMVpNOTQuNzQ3OCAxNy4xMjUxSDEwNi45N0MxMDYuOTcgMTQuNzkzMyAxMDUuNjI0IDEzLjAxMDggMTAyLjkyOCAxMS43NzIxQzEwMi4yOTQgMTEuNTUzNSAxMDEuNTY1IDExLjQ0MTMgMTAwLjc0MSAxMS40NDEzQzk3Ljg0ODIgMTEuNDQxMyA5NS45MjUyIDEyLjg5ODcgOTQuOTYwOSAxNS44MDc4Qzk0LjgyMDcgMTYuMzkwOCA5NC43NDc4IDE2LjgyOCA5NC43NDc4IDE3LjExOTVWMTcuMTI1MVpNMTEyLjU5OSA0LjYxOTc1SDExMi44NjJDMTEzLjU5NyA0LjYxOTc1IDExNC4wMTIgNS4xMjQyMyAxMTQuMTEzIDYuMTMzMTdWMTUuODUyN0wxMjYuMTM4IDQuNzU0MjhDMTI2LjQyNCA0LjY2NDYgMTI2LjYyMSA0LjYyNTM2IDEyNi43MjcgNC42MjUzNkgxMjYuOTkxQzEyNy43ODEgNC43ODc5MSAxMjguMTc0IDUuMTg1ODggMTI4LjE3NCA1LjgwODA3VjYuMDcxNTFDMTI4LjE3NCA2LjU4NzIgMTI3LjM4MyA3LjQ4NDA0IDEyNS44MDggOC43NjIwNEwxMTkuNTY4IDE0LjYwODNWMTQuNjc1NkMxMjUuNjIzIDIwLjk1OTEgMTI4LjY4OSAyNC4yMjEzIDEyOC43NjggMjQuNDYyM0MxMjguNzY4IDI0LjU3NDUgMTI4Ljc5IDI0Ljc0ODIgMTI4LjgzNSAyNC45ODkyQzEyOC42MjggMjUuODYzNyAxMjguMTkgMjYuMzAwOSAxMjcuNTIzIDI2LjMwMDlDMTI2LjkwMSAyNi4zMDA5IDEyNi4wMjEgMjUuNjAwMiAxMjQuODk0IDI0LjE5ODlMMTE3LjQ3MSAxNi41MTQxTDExNC4xMTggMTkuNzMxNVYyNC43ODc1QzExNC4wMTcgMjUuNzk2NCAxMTMuNjAyIDI2LjMwMDkgMTEyLjg2OCAyNi4zMDA5SDExMi42MDRDMTExLjg3IDI2LjMwMDkgMTExLjQ1NSAyNS43OTY0IDExMS4zNTQgMjQuNzg3NVY2LjEzMzE3QzExMS40NTUgNS4xMjQyMyAxMTEuODcgNC42MTk3NSAxMTIuNjA0IDQuNjE5NzVIMTEyLjU5OVpNMTMzLjY0IDQuMjQ0MkMxMzQuNDQyIDQuNDE3OTYgMTM0Ljg0IDQuNzgyMzEgMTM0Ljg0IDUuMzI2MDJWOS4yNDk2OUgxMzguNDM5QzEzOS4xNzMgOS4zNjE4IDEzOS41MzggOS42ODY5IDEzOS41MzggMTAuMjM2MlYxMC40NjZDMTM5LjUzOCAxMS4wMTUzIDEzOS4xNzMgMTEuMzM0OCAxMzguNDM5IDExLjQzNTdIMTM0Ljg0VjE5LjE4NzhDMTM0Ljg0IDIyLjE2NDIgMTM1LjI3NyAyMy42NTUyIDEzNi4xNTIgMjMuNjU1MkMxMzYuMTUyIDIzLjgxNzcgMTM2LjQ4MiAyMy45Mjk4IDEzNy4xMzggMjMuOTg1OUMxMzcuNjY1IDIzLjk4NTkgMTM4LjQ5NSAyMy44MDY1IDEzOS42MzMgMjMuNDQyMkgxMzkuNzUxQzE0MC4zMzQgMjMuNzE2OCAxNDAuNjIgMjQuMDc1NiAxNDAuNjIgMjQuNTI0QzE0MC42MiAyNS41MzMgMTM5LjU2NiAyNi4xMTAzIDEzNy40NjkgMjYuMjY3MkgxMzcuMjM5QzEzNS4wNyAyNi4yNjcyIDEzMy41ODQgMjUuMjEzNCAxMzIuNzcxIDIzLjExNzFDMTMyLjU1MiAyMi4xOTc4IDEzMi40NCAyMS4zMjM0IDEzMi40NCAyMC40ODgyVjExLjQzNTdIMTMwLjI1NEMxMjkuNTMgMTEuMzM0OCAxMjkuMTcyIDExLjAxNTMgMTI5LjE3MiAxMC40NjZWMTAuMzQ4M0MxMjkuMjcyIDkuNjE0MDMgMTI5LjYzMSA5LjI0OTY5IDEzMC4yNTQgOS4yNDk2OUgxMzIuNDRWNS40NDM3M0MxMzIuNTggNC42NDIxNyAxMzIuOTg0IDQuMjQ0MiAxMzMuNjQgNC4yNDQyWk0xNTAuMDUgOS4xMDM5NkMxNTIuNDUgOS4xMDM5NiAxNTQuMjY2IDkuOTA1NTEgMTU1LjUwNSAxMS41MDNWMTAuNDA0NEMxNTUuNjA2IDkuNjgxMyAxNTUuOTI2IDkuMzIyNTYgMTU2LjQ3NSA5LjMyMjU2SDE1Ni45MThDMTU3LjU3NCA5LjMyMjU2IDE1Ny45MzggOS43NTk3NyAxNTggMTAuNjM0MlYyNC44MDQzQzE1OCAyNS43NDYgMTU3LjUyOSAyNi4yMTY4IDE1Ni41ODcgMjYuMjE2OEMxNTUuODY0IDI2LjA1NDIgMTU1LjUwNSAyNS42ODk5IDE1NS41MDUgMjUuMTM1VjIzLjcwNTZDMTU0LjA1OSAyNS41MjE3IDE1Mi4yNzYgMjYuNDI5OCAxNTAuMTUxIDI2LjQyOThDMTQ2LjY4MSAyNi40Mjk4IDE0NC4xMzUgMjQuNzIwMiAxNDIuNTE1IDIxLjMwNjZDMTQyLjAxIDIwLjAxNzQgMTQxLjc1OCAxOC44MTc5IDE0MS43NTggMTcuNzA4QzE0MS43NTggMTMuNDI1NiAxNDMuOTA1IDEwLjYyODYgMTQ4LjE5NCA5LjMxNjk2QzE0OS4wMzUgOS4xNzY4MiAxNDkuNjU4IDkuMTAzOTYgMTUwLjA1IDkuMTAzOTZaTTE0NC4yNyAxNy43MDhDMTQ0LjI3IDIwLjYyODQgMTQ1LjY4OCAyMi42Njg3IDE0OC41MjUgMjMuODE3N0MxNDkuMDc0IDIzLjk1NzkgMTQ5LjU3OSAyNC4wMzA3IDE1MC4wNSAyNC4wMzA3SDE1MC4zODFDMTUzLjE2MiAyNC4wMzA3IDE1NC44NzIgMjIuNDcyNSAxNTUuNTA1IDE5LjM1MDRWMTYuNzIxNUMxNTUuNTA1IDEzLjk1MjUgMTU0LjE5OSAxMi4yNDI5IDE1MS41ODEgMTEuNTk4M0MxNTAuOTU4IDExLjUzMSAxNTAuNDgyIDExLjQ5NzQgMTUwLjE1MSAxMS40OTc0QzE0Ni45ODkgMTEuNDk3NCAxNDUuMDYgMTMuMjA3IDE0NC4zNzEgMTYuNjIwNkwxNDQuMjcgMTcuNzAyNFYxNy43MDhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
          />
        </a>
        <h5 class="logo-text pt-3">Sempre konektado</h5>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid navbar-menu">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse p-2" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item pt-2">
                <a class="nav-link text-white menu-item" href="/produts">
                  <h7>
                    <span>Produtos</span>
                  </h7>
                </a>
              </li>
              <li class="nav-item pt-2">
                <a class="nav-link text-white menu-item" href="/business"
                  ><h7>Negócios</h7></a
                >
              </li>
              <li class="nav-item pt-2 dropdown">
                <a
                  class="nav-link text-white menu-item dropdown-toggle menu_drop"
                  href="/resources"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h7>Recursos</h7>
                </a>
                <ul class="dropdown-menu submenu_drop">
                  <li><a class="dropdown-item" href="/faqs">FAQs</a></li>
                  <li>
                    <a class="dropdown-item" href="/tech_corner">Documentação</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/contact">Contacto</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item pt-2">
                <a class="nav-link text-white menu-item" href="/about_us"
                  ><h7>Sobre Nós</h7></a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
  
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const submenuToggle = document.getElementById("submenuToggle");
      const submenu = document.getElementById("submenu");
      const submenuIcon = document.getElementById("submenuIcon");
  
      submenuToggle.addEventListener("click", function () {
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
          submenuIcon.classList.remove("icon-open");
          submenuIcon.classList.add("icon-closed");
        } else {
          submenu.style.display = "block";
          submenuIcon.classList.remove("icon-closed");
          submenuIcon.classList.add("icon-open");
        }
      });
    });
  </script>
  `;  
  }
}

customElements.define("header-component", Header);

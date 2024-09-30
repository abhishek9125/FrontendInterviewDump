const tabsData = [
    {
        id: 'tab1',
        title: 'Tab 1',
        content: 'This is Content for Tab 1'
    },
    {
        id: 'tab2',
        title: 'Tab 2',
        content: 'This is Content for Tab 2'
    },
    {
        id: 'tab3',
        title: 'Tab 3',
        content: 'This is Content for Tab 3'
    },
]

document.addEventListener("DOMContentLoaded", function() {
    let activeTab = tabsData[0].id;

    function renderTabs() {
        const tabContainter = document.querySelector('#tabContainer');
        const contentContainter = document.querySelector('#tabContentContainer');

        tabsData.forEach((tabItem) => {
            const tabButton = document.createElement('button');
            tabButton.className = "tabLinks";
            tabButton.setAttribute('data-tab', tabItem.id);
            tabButton.textContent = tabItem.title;
            tabContainter.appendChild(tabButton);

            const tabContent = document.createElement("div");
            tabContent.id = tabItem.id;
            tabContent.className = "tabContent";
            tabContent.innerHTML = `<h3>${tabItem.title}</h3><p>${tabItem.content}</p>`;
            contentContainter.appendChild(tabContent);
        });

        tabContainter.addEventListener('click', function (event) {
            if(event.target.matches('.tabLinks')) {
                const tabId = event.target.getAttribute("data-tab");
                if(tabId != activeTab) {
                    openTab(tabId);
                    activeTab = tabId;
                }
            }
        });
    }

    function openTab(tabId) {
        const tabContents = document.querySelectorAll('.tabContent');
        const tabLinks = document.querySelectorAll('.tabLinks');

        tabContents.forEach((tab) => tab.classList.remove('active'));
        tabLinks.forEach((tab) => tab.classList.remove('active'));

        document.getElementById(tabId).classList.add('active');
        document.querySelector(`button[data-tab="${tabId}"]`).classList.add('active');
    }

    renderTabs();
    document.getElementById(activeTab).classList.add('active');
    document.querySelector(`button[data-tab="${activeTab}"]`).classList.add('active');
})
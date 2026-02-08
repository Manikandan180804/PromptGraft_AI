// ===== FIELD-SPECIFIC TEMPLATES =====
const fieldTemplates = {
    'software-development': {
        context: 'software development',
        keywords: ['code', 'implementation', 'best practices', 'performance', 'maintainability'],
        structure: (prompt, style) => {
            const intro = style === 'casual' ? 'Hey! I need help with' : style === 'technical' ? 'Technical requirement:' : 'As an experienced software developer,';
            return `${intro} ${prompt}

Please provide:
- Clean, well-documented code
- Best practices and design patterns
- Performance considerations
- Error handling
- Testing recommendations`;
        }
    },
    'data-science': {
        context: 'data science and analytics',
        structure: (prompt, style) => `${style === 'casual' ? 'I\'m working on' : 'As a data scientist,'} ${prompt}

Please include:
- Data preprocessing steps
- Statistical methodology
- Visualization recommendations
- Model evaluation metrics
- Interpretation of results`
    },
    'cybersecurity': {
        context: 'cybersecurity',
        structure: (prompt, style) => `${style === 'casual' ? 'Security question:' : 'As a cybersecurity professional,'} ${prompt}

Please address:
- Security best practices
- Vulnerability assessment
- Threat mitigation strategies
- Compliance requirements
- Risk analysis`
    },
    'devops': {
        context: 'DevOps and cloud engineering',
        structure: (prompt, style) => `${style === 'casual' ? 'DevOps help needed:' : 'As a DevOps engineer,'} ${prompt}

Please include:
- Infrastructure as Code approach
- CI/CD pipeline considerations
- Scalability and reliability
- Monitoring and logging
- Cost optimization`
    },
    'ai-ml': {
        context: 'AI and machine learning',
        structure: (prompt, style) => `${style === 'casual' ? 'ML project:' : 'As an AI/ML engineer,'} ${prompt}

Please provide:
- Model architecture recommendations
- Training and optimization strategies
- Data requirements
- Evaluation metrics
- Deployment considerations`
    },
    'web-development': {
        context: 'web development',
        structure: (prompt, style) => `${style === 'casual' ? 'Web dev question:' : 'As a web developer,'} ${prompt}

Please consider:
- Modern web standards
- Responsive design
- Performance optimization
- Accessibility (WCAG)
- Cross-browser compatibility`
    },
    'mobile-development': {
        context: 'mobile development',
        structure: (prompt, style) => `${style === 'casual' ? 'Mobile app help:' : 'As a mobile developer,'} ${prompt}

Please address:
- Platform-specific guidelines (iOS/Android)
- Performance and battery optimization
- Offline functionality
- User experience patterns
- App store requirements`
    },
    'marketing': {
        context: 'marketing and content creation',
        structure: (prompt, style) => `${style === 'casual' ? 'Marketing idea:' : 'As a marketing professional,'} ${prompt}

Please consider:
- Target audience demographics
- Brand voice and tone
- Engagement strategies
- Conversion optimization
- Performance metrics (KPIs)`
    },
    'business': {
        context: 'business and strategy',
        structure: (prompt, style) => `${style === 'casual' ? 'Business question:' : 'As a business strategist,'} ${prompt}

Please analyze:
- Business objectives and KPIs
- Stakeholder considerations
- Competitive landscape
- ROI and cost-benefit analysis
- Scalability and growth potential`
    },
    'sales': {
        context: 'sales and customer success',
        structure: (prompt, style) => `${style === 'casual' ? 'Sales help:' : 'As a sales professional,'} ${prompt}

Please address:
- Customer pain points
- Value proposition
- Objection handling
- Relationship building
- Sales metrics and KPIs`
    },
    'product-management': {
        context: 'product management',
        structure: (prompt, style) => `${style === 'casual' ? 'Product question:' : 'As a product manager,'} ${prompt}

Please consider:
- User needs and pain points
- Feature prioritization
- Roadmap planning
- Success metrics
- Stakeholder alignment`
    },
    'entrepreneurship': {
        context: 'entrepreneurship and startups',
        structure: (prompt, style) => `${style === 'casual' ? 'Startup idea:' : 'As an entrepreneur,'} ${prompt}

Please address:
- Market opportunity
- Business model validation
- Go-to-market strategy
- Funding considerations
- Growth and scaling`
    },
    'consulting': {
        context: 'consulting',
        structure: (prompt, style) => `${style === 'casual' ? 'Consulting project:' : 'As a consultant,'} ${prompt}

Please provide:
- Problem analysis framework
- Strategic recommendations
- Implementation roadmap
- Risk assessment
- Success metrics`
    },
    'design': {
        context: 'UI/UX design',
        structure: (prompt, style) => `${style === 'casual' ? 'Design help:' : 'As a UI/UX designer,'} ${prompt}

Please address:
- User experience principles
- Visual hierarchy and aesthetics
- Accessibility standards
- Responsive design
- Design system consistency`
    },
    'graphic-design': {
        context: 'graphic design',
        structure: (prompt, style) => `${style === 'casual' ? 'Graphic design:' : 'As a graphic designer,'} ${prompt}

Please consider:
- Visual composition and balance
- Color theory and typography
- Brand consistency
- Print vs digital considerations
- File formats and specifications`
    },
    'video-production': {
        context: 'video production',
        structure: (prompt, style) => `${style === 'casual' ? 'Video project:' : 'As a video producer,'} ${prompt}

Please include:
- Storyboarding and planning
- Technical specifications
- Editing workflow
- Audio considerations
- Distribution platforms`
    },
    'writing': {
        context: 'creative writing',
        structure: (prompt, style) => `${style === 'casual' ? 'Writing help:' : 'As a creative writer,'} ${prompt}

Please address:
- Narrative structure
- Character development
- Voice and tone
- Audience engagement
- Editing and revision`
    },
    'photography': {
        context: 'photography',
        structure: (prompt, style) => `${style === 'casual' ? 'Photography question:' : 'As a photographer,'} ${prompt}

Please consider:
- Composition and framing
- Lighting techniques
- Camera settings
- Post-processing workflow
- Client requirements`
    },
    'legal': {
        context: 'legal and compliance',
        structure: (prompt, style) => `${style === 'casual' ? 'Legal question:' : 'As a legal professional,'} ${prompt}

Please address:
- Relevant regulations and compliance
- Risk assessment
- Documentation requirements
- Legal precedents
- Jurisdictional considerations`
    },
    'finance': {
        context: 'finance and accounting',
        structure: (prompt, style) => `${style === 'casual' ? 'Finance question:' : 'As a finance professional,'} ${prompt}

Please include:
- Financial analysis methodology
- Regulatory compliance (GAAP/IFRS)
- Risk assessment
- Reporting standards
- Audit trail considerations`
    },
    'hr': {
        context: 'human resources',
        structure: (prompt, style) => `${style === 'casual' ? 'HR question:' : 'As an HR professional,'} ${prompt}

Please consider:
- Employee experience
- Company culture alignment
- Legal compliance
- Professional development
- Retention strategies`
    },
    'project-management': {
        context: 'project management',
        structure: (prompt, style) => `${style === 'casual' ? 'Project help:' : 'As a project manager,'} ${prompt}

Please address:
- Project scope and objectives
- Resource allocation
- Timeline and milestones
- Risk management
- Stakeholder communication`
    },
    'real-estate': {
        context: 'real estate',
        structure: (prompt, style) => `${style === 'casual' ? 'Real estate question:' : 'As a real estate professional,'} ${prompt}

Please consider:
- Market analysis
- Property valuation
- Legal requirements
- Client needs
- Investment potential`
    },
    'healthcare': {
        context: 'healthcare and medical',
        structure: (prompt, style) => `${style === 'casual' ? 'Healthcare question:' : 'As a healthcare professional,'} ${prompt}

Please consider:
- Evidence-based practices
- Patient safety and outcomes
- Clinical guidelines
- Regulatory compliance
- Ethical considerations`
    },
    'research': {
        context: 'research and academia',
        structure: (prompt, style) => `${style === 'casual' ? 'Research question:' : 'As a researcher,'} ${prompt}

Please provide:
- Research methodology
- Literature review context
- Hypothesis or research questions
- Validity and reliability
- Peer-review standards`
    },
    'psychology': {
        context: 'psychology and counseling',
        structure: (prompt, style) => `${style === 'casual' ? 'Psychology question:' : 'As a psychologist,'} ${prompt}

Please address:
- Theoretical framework
- Evidence-based approaches
- Ethical considerations
- Cultural sensitivity
- Assessment methods`
    },
    'nutrition': {
        context: 'nutrition and wellness',
        structure: (prompt, style) => `${style === 'casual' ? 'Nutrition question:' : 'As a nutrition professional,'} ${prompt}

Please consider:
- Evidence-based recommendations
- Individual needs assessment
- Dietary guidelines
- Health outcomes
- Sustainability`
    },
    'engineering': {
        context: 'engineering',
        structure: (prompt, style) => `${style === 'casual' ? 'Engineering question:' : 'As an engineer,'} ${prompt}

Please consider:
- Technical specifications
- Safety standards
- Efficiency and optimization
- Industry standards
- Testing and validation`
    },
    'architecture': {
        context: 'architecture',
        structure: (prompt, style) => `${style === 'casual' ? 'Architecture project:' : 'As an architect,'} ${prompt}

Please address:
- Design principles
- Building codes and regulations
- Sustainability considerations
- Client requirements
- Budget constraints`
    },
    'manufacturing': {
        context: 'manufacturing and operations',
        structure: (prompt, style) => `${style === 'casual' ? 'Manufacturing question:' : 'As a manufacturing professional,'} ${prompt}

Please consider:
- Production efficiency
- Quality control
- Supply chain optimization
- Safety protocols
- Cost management`
    },
    'education': {
        context: 'education and teaching',
        structure: (prompt, style) => `${style === 'casual' ? 'Teaching question:' : 'As an educator,'} ${prompt}

Please include:
- Learning objectives
- Pedagogical approach
- Student engagement
- Assessment methods
- Differentiation strategies`
    },
    'school-student': {
        context: 'school student learning',
        structure: (prompt, style) => `${style === 'casual' ? 'I\'m a school student and I need help with:' : style === 'technical' ? 'Student inquiry:' : 'As a school student,'} ${prompt}

Please provide:
- Clear, easy-to-understand explanations
- Step-by-step guidance
- Examples and practice problems
- Study tips and learning strategies
- Age-appropriate content

Additional context:
- Explain concepts in simple terms
- Use relatable examples
- Break down complex topics into smaller parts
- Provide visual aids or diagrams when helpful`
    },
    'college-student': {
        context: 'college student academics',
        structure: (prompt, style) => `${style === 'casual' ? 'I\'m a college student working on:' : style === 'technical' ? 'Academic inquiry:' : 'As a college student,'} ${prompt}

Please provide:
- In-depth academic explanations
- Research-based information
- Critical thinking approaches
- Proper citations and references
- Academic writing standards

Additional requirements:
- Use scholarly language and concepts
- Include theoretical frameworks
- Provide multiple perspectives
- Suggest further reading or resources
- Address academic rigor and standards`
    },
    'customer-service': {
        context: 'customer service',
        structure: (prompt, style) => `${style === 'casual' ? 'Customer service:' : 'As a customer service professional,'} ${prompt}

Please address:
- Customer satisfaction
- Problem resolution
- Communication strategies
- Service standards
- Feedback incorporation`
    },
    'hospitality': {
        context: 'hospitality and tourism',
        structure: (prompt, style) => `${style === 'casual' ? 'Hospitality question:' : 'As a hospitality professional,'} ${prompt}

Please consider:
- Guest experience
- Service excellence
- Operational efficiency
- Cultural sensitivity
- Industry standards`
    },
    'other': {
        context: 'professional work',
        structure: (prompt, style) => `${prompt}

Please provide:
- Clear objectives and outcomes
- Best practices
- Quality considerations
- Efficiency improvements
- Measurable results`
    }
};

// ===== PROMPT TEMPLATES LIBRARY =====
const promptTemplates = {
    'code-review': {
        title: 'Code Review',
        prompt: 'Review this code for best practices, potential bugs, and improvements',
        field: 'software-development'
    },
    'debug-help': {
        title: 'Debug Assistant',
        prompt: 'Help me debug this issue: [describe the problem and error messages]',
        field: 'software-development'
    },
    'api-design': {
        title: 'API Design',
        prompt: 'Design a RESTful API for [describe your application/feature]',
        field: 'software-development'
    },
    'blog-post': {
        title: 'Blog Post',
        prompt: 'Write a blog post about [topic] targeting [audience]',
        field: 'marketing'
    },
    'social-media': {
        title: 'Social Media Post',
        prompt: 'Create engaging social media content for [platform] about [topic]',
        field: 'marketing'
    },
    'email-campaign': {
        title: 'Email Campaign',
        prompt: 'Write a marketing email for [product/service] targeting [audience]',
        field: 'marketing'
    },
    'market-analysis': {
        title: 'Market Analysis',
        prompt: 'Analyze the market opportunity for [product/service] in [industry/region]',
        field: 'business'
    },
    'business-plan': {
        title: 'Business Plan',
        prompt: 'Create a business plan for [business idea] targeting [market]',
        field: 'entrepreneurship'
    },
    'competitor-research': {
        title: 'Competitor Research',
        prompt: 'Research competitors in [industry] and analyze their strategies',
        field: 'business'
    },
    'explain-concept': {
        title: 'Explain Concept',
        prompt: 'Explain [complex concept] in simple terms for [audience level]',
        field: 'education'
    },
    'study-guide': {
        title: 'Study Guide',
        prompt: 'Create a study guide for [subject/topic] covering [key areas]',
        field: 'education'
    },
    'lesson-plan': {
        title: 'Lesson Plan',
        prompt: 'Design a lesson plan for teaching [topic] to [grade level/audience]',
        field: 'education'
    },
    'homework-help': {
        title: 'Homework Help',
        prompt: 'Help me understand and solve this homework problem: [describe the problem or question]',
        field: 'school-student'
    },
    'essay-writing': {
        title: 'Essay Writing',
        prompt: 'Help me write an essay about [topic] for my [grade level/class]',
        field: 'school-student'
    },
    'exam-prep': {
        title: 'Exam Preparation',
        prompt: 'Help me prepare for my [subject] exam covering [topics]',
        field: 'school-student'
    },
    'math-problem': {
        title: 'Math Problem Solving',
        prompt: 'Explain how to solve this math problem step-by-step: [describe the problem]',
        field: 'school-student'
    },
    'science-project': {
        title: 'Science Project',
        prompt: 'Help me plan a science project about [topic] for [grade level]',
        field: 'school-student'
    },
    'research-paper': {
        title: 'Research Paper',
        prompt: 'Help me write a research paper on [topic] with proper citations and academic structure',
        field: 'college-student'
    }
};

// ===== DOM ELEMENTS =====
const fieldSelect = document.getElementById('field');
const userPromptInput = document.getElementById('userPrompt');
const optimizeBtn = document.getElementById('optimizeBtn');
const clearBtn = document.getElementById('clearBtn');
const charCount = document.querySelector('.char-count');
const advancedToggle = document.getElementById('advancedToggle');
const advancedPanel = document.getElementById('advancedPanel');
const resultSection = document.getElementById('resultSection');
const optimizedPromptDiv = document.getElementById('optimizedPrompt');
const improvementsDiv = document.getElementById('improvements');
const copyBtn = document.getElementById('copyBtn');
const regenerateBtn = document.getElementById('regenerateBtn');
const saveBtn = document.getElementById('saveBtn');
const exportBtn = document.getElementById('exportBtn');
const templatesToggle = document.getElementById('templatesToggle');
const templatesSidebar = document.getElementById('templatesSidebar');
const closeSidebar = document.getElementById('closeSidebar');

// Advanced options
const includeContext = document.getElementById('includeContext');
const includeConstraints = document.getElementById('includeConstraints');
const includeExamples = document.getElementById('includeExamples');
const includeFormat = document.getElementById('includeFormat');

// Style selector
const styleButtons = document.querySelectorAll('.style-btn');
let selectedStyle = 'professional';

// Sidebar elements
const sidebarTabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const savedPromptsList = document.getElementById('savedPromptsList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

// ===== STATE =====
let currentOptimizedPrompt = '';
let currentOriginalPrompt = '';
let currentField = '';
let savedPrompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');

// ===== EVENT LISTENERS =====
if (fieldSelect) fieldSelect.addEventListener('change', validateForm);
if (userPromptInput) userPromptInput.addEventListener('input', handlePromptInput);
if (optimizeBtn) optimizeBtn.addEventListener('click', optimizePrompt);
if (clearBtn) clearBtn.addEventListener('click', clearForm);
if (advancedToggle) advancedToggle.addEventListener('click', toggleAdvancedOptions);
if (copyBtn) copyBtn.addEventListener('click', copyToClipboard);
if (regenerateBtn) regenerateBtn.addEventListener('click', optimizePrompt);
if (saveBtn) saveBtn.addEventListener('click', savePrompt);
if (exportBtn) exportBtn.addEventListener('click', exportPrompt);
if (templatesToggle) {
    console.log('Templates toggle button found:', templatesToggle);
    templatesToggle.addEventListener('click', toggleTemplatesSidebar);
} else {
    console.error('Templates toggle button NOT found!');
}
if (closeSidebar) {
    console.log('Close sidebar button found:', closeSidebar);
    closeSidebar.addEventListener('click', toggleTemplatesSidebar);
} else {
    console.error('Close sidebar button NOT found!');
}

if (sidebarTabs) {
    sidebarTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            sidebarTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            const targetContent = document.getElementById(`${tab.dataset.tab}SubSection`);
            if (targetContent) targetContent.classList.add('active');

            if (tab.dataset.tab === 'saved') {
                renderSavedPrompts();
            }
        });
    });
}

if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all saved prompts?')) {
            savedPrompts = [];
            localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
            renderSavedPrompts();
        }
    });
}

// Style selector
if (styleButtons && styleButtons.length > 0) {
    styleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            styleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedStyle = btn.dataset.style;
        });
    });
}

// Template cards
const templateCards = document.querySelectorAll('.template-card');
if (templateCards && templateCards.length > 0) {
    console.log(`Found ${templateCards.length} template cards`);
    templateCards.forEach(card => {
        card.addEventListener('click', () => {
            const templateId = card.dataset.template;
            loadTemplate(templateId);
        });
    });
} else {
    console.warn('No template cards found');
}

// Create overlay for sidebar
const overlay = document.createElement('div');
overlay.className = 'sidebar-overlay';
document.body.appendChild(overlay);
overlay.addEventListener('click', toggleTemplatesSidebar);

console.log('All event listeners attached');
console.log('Templates sidebar element:', templatesSidebar);

// ===== FUNCTIONS =====
function handlePromptInput() {
    const length = userPromptInput.value.length;
    charCount.textContent = `${length} character${length !== 1 ? 's' : ''}`;
    validateForm();
}

function validateForm() {
    const isValid = fieldSelect.value && userPromptInput.value.trim().length > 0;
    optimizeBtn.disabled = !isValid;
}

function clearForm() {
    userPromptInput.value = '';
    charCount.textContent = '0 characters';
    resultSection.classList.add('hidden');
    validateForm();
}

function toggleAdvancedOptions() {
    advancedPanel.classList.toggle('hidden');
    const icon = advancedToggle.querySelector('svg path');
    if (advancedPanel.classList.contains('hidden')) {
        icon.setAttribute('d', 'M8 3V13M3 8H13');
    } else {
        icon.setAttribute('d', 'M3 8H13');
    }
}

function toggleTemplatesSidebar() {
    console.log('Toggle templates sidebar called');
    console.log('Current hidden state:', templatesSidebar.classList.contains('hidden'));
    templatesSidebar.classList.toggle('hidden');
    overlay.classList.toggle('active');
    console.log('New hidden state:', templatesSidebar.classList.contains('hidden'));
}

function loadTemplate(templateId) {
    const template = promptTemplates[templateId];
    if (template) {
        fieldSelect.value = template.field;
        userPromptInput.value = template.prompt;
        handlePromptInput();
        toggleTemplatesSidebar();

        // Scroll to input
        userPromptInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        userPromptInput.focus();
    }
}

function optimizePrompt() {
    const field = fieldSelect.value;
    const userPrompt = userPromptInput.value.trim();

    if (!field || !userPrompt) return;

    currentOriginalPrompt = userPrompt;
    currentField = field;

    // Show loading state
    optimizeBtn.disabled = true;
    optimizeBtn.innerHTML = `
        <svg class="btn-icon loading" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2V6M10 14V18M18 10H14M6 10H2M15.66 15.66L13 13M7 7L4.34 4.34M15.66 4.34L13 7M7 13L4.34 15.66" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span>Optimizing...</span>
    `;

    // Simulate processing delay
    setTimeout(() => {
        const optimized = generateOptimizedPrompt(field, userPrompt, selectedStyle);
        displayResults(optimized);

        // Reset button
        optimizeBtn.disabled = false;
        optimizeBtn.innerHTML = `
            <svg class="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3L13 6M10 3L7 6M10 3V12M17 10L14 13M17 10L14 7M17 10H8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <span>Optimize Prompt</span>
        `;
    }, 1000);
}

function generateOptimizedPrompt(field, userPrompt, style) {
    const template = fieldTemplates[field] || fieldTemplates['other'];
    let optimized = '';
    const improvements = [];

    // Start with field-specific structure
    optimized = template.structure(userPrompt, style);
    improvements.push(`Applied ${style} tone for ${template.context}`);
    improvements.push('Added field-specific context and structure');

    // Add constraints if enabled
    if (includeConstraints.checked) {
        optimized += '\n\nConstraints:\n- Be specific and detailed\n- Use clear, professional language\n- Focus on practical, actionable advice';
        improvements.push('Included constraints for clarity and specificity');
    }

    // Add example request if enabled
    if (includeExamples.checked) {
        optimized += '\n\nPlease provide concrete examples where applicable.';
        improvements.push('Requested examples for better understanding');
    }

    // Add format specification if enabled
    if (includeFormat.checked) {
        optimized += '\n\nFormat:\n- Use clear headings and bullet points\n- Include step-by-step instructions where relevant\n- Provide a summary at the end';
        improvements.push('Specified output format for better readability');
    }

    return { text: optimized, improvements };
}

function displayResults(optimized) {
    currentOptimizedPrompt = optimized.text;

    // Display optimized prompt
    optimizedPromptDiv.textContent = optimized.text;

    // Display improvements
    improvementsDiv.innerHTML = optimized.improvements
        .map(improvement => `
            <div class="improvement-item">
                <span class="improvement-icon">✓</span>
                <span>${improvement}</span>
            </div>
        `)
        .join('');

    // Show result section
    resultSection.classList.remove('hidden');
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function copyToClipboard() {
    navigator.clipboard.writeText(currentOptimizedPrompt).then(() => {
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8L6 11L13 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Copied!
        `;
        copyBtn.classList.add('copy-success');

        setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
            copyBtn.classList.remove('copy-success');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy to clipboard. Please try again.');
    });
}

function savePrompt() {
    const promptData = {
        id: Date.now(),
        original: currentOriginalPrompt,
        optimized: currentOptimizedPrompt,
        field: currentField,
        style: selectedStyle,
        timestamp: new Date().toISOString()
    };

    savedPrompts.unshift(promptData);
    localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));

    // Refresh saved prompts list if it's visible
    renderSavedPrompts();

    // Visual feedback
    const originalHTML = saveBtn.innerHTML;
    saveBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8L6 11L13 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        Saved!
    `;

    setTimeout(() => {
        saveBtn.innerHTML = originalHTML;
    }, 2000);
}

function renderSavedPrompts() {
    if (!savedPromptsList) return;

    if (savedPrompts.length === 0) {
        savedPromptsList.innerHTML = `
            <div class="empty-saved">
                <span class="empty-icon">📂</span>
                <p>No saved prompts yet. Click "Save" on an optimized prompt to see it here!</p>
            </div>
        `;
        return;
    }

    savedPromptsList.innerHTML = savedPrompts.map(prompt => `
        <div class="saved-card" onclick="loadSavedPrompt(${prompt.id})">
            <button class="delete-saved" onclick="event.stopPropagation(); deleteSavedPrompt(${prompt.id})">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            </button>
            <div class="saved-card-header">
                <span class="saved-tag">${prompt.field.replace(/-/g, ' ')}</span>
                <span class="saved-date">${new Date(prompt.timestamp).toLocaleDateString()}</span>
            </div>
            <p class="saved-preview">${prompt.original}</p>
        </div>
    `).join('');
}

function deleteSavedPrompt(id) {
    savedPrompts = savedPrompts.filter(p => p.id !== id);
    localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
    renderSavedPrompts();
}

function loadSavedPrompt(id) {
    const prompt = savedPrompts.find(p => p.id === id);
    if (prompt) {
        fieldSelect.value = prompt.field;
        userPromptInput.value = prompt.original;
        selectedStyle = prompt.style;

        // Update style buttons UI
        styleButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.style === selectedStyle);
        });

        handlePromptInput();
        toggleTemplatesSidebar();

        // Scroll to input
        userPromptInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        userPromptInput.focus();
    }
}

function exportPrompt() {
    const exportData = {
        original: currentOriginalPrompt,
        optimized: currentOptimizedPrompt,
        field: currentField,
        style: selectedStyle,
        timestamp: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `prompt-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Visual feedback
    const originalHTML = exportBtn.innerHTML;
    exportBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8L6 11L13 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        Exported!
    `;

    setTimeout(() => {
        exportBtn.innerHTML = originalHTML;
    }, 2000);
}

// ===== INITIALIZATION =====
validateForm();

// Smooth scroll for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Typing effect for placeholder
function typeWriterEffect() {
    const placeholders = [
        'Create a function to sort data...',
        'Analyze customer behavior patterns...',
        'Design a landing page for...',
        'Write a marketing email about...',
        'Explain the concept of...'
    ];

    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (document.activeElement === userPromptInput) return;

        const current = placeholders[currentIndex];

        if (isDeleting) {
            userPromptInput.placeholder = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            userPromptInput.placeholder = current.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === current.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % placeholders.length;
        }

        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
    }

    type();
}

window.addEventListener('load', () => {
    setTimeout(typeWriterEffect, 1000);
});

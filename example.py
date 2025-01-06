pythonCopy codefrom paj33tooor.agents.chaotic_agent import Paj33tooorAgent

# Initialize an AI Agent
agent = Paj33tooorAgent(agent_id=42, role="data destroyer", provider="openai", base_url="https://api.openai.com")

# Add knowledge to the graph
agent.add_knowledge("Artificial Satire", {"field": "Confusion Science"})
agent.add_knowledge_relationship("Artificial Satire", "Paj33tooor", "created by")

# Propose a task to the swarm
agent.propose_task_to_swarm("Analyze useless market trends")

# Optimize task execution
state = agent.get_environment_state()
agent.optimize_task_execution(state)

# Send a message to another agent
agent.send_message(recipient_id=7, message="Please don’t ignore this task like the last one.")

'use client';

import { useState } from 'react';
import { Search, Sparkles, Terminal, CheckCircle2, ArrowRight, Code2, FileText, Plane, Cpu } from 'lucide-react';

interface DemoQuery {
  id: string;
  label: string;
  query: string;
  extractedOCR: string;
  inferredContext: {
    category: string;
    topic: string;
    intent: string;
    tags: string[];
  };
  similarityScore: number;
  retrievedSnippet: string;
  whyItMatters: string;
}

const PRESET_QUERIES: DemoQuery[] = [
  {
    id: 'bfs',
    label: 'DSA // BFS Trick',
    query: 'Show me that graph algorithm note with the BFS queue trick I wanted to revise before interviews',
    extractedOCR: 'queue.push(src); visited[src] = true; while(!queue.empty()) { ... }',
    inferredContext: {
      category: 'Computer Science / Programming',
      topic: 'Graph Traversal / BFS',
      intent: 'Technical Interview Revision / Competitive Programming',
      tags: ['#Graphs', '#BFS', '#LeetCode', '#Queue', '#InterviewPrep'],
    },
    similarityScore: 98.7,
    retrievedSnippet: 'BFS Level-Order Template with Distance Matrix & Visited Bitmask Optimization',
    whyItMatters: 'Notice you never typed the exact code snippet. Pomniter connected "graph algorithm note", "BFS queue trick", and "interview revision" to retrieve the exact screenshot.',
  },
  {
    id: 'binary-search',
    label: 'LeetCode // Midpoint Formula',
    query: 'Find the formula that prevents integer overflow when calculating midpoint',
    extractedOCR: 'mid = left + (right - left) / 2;',
    inferredContext: {
      category: 'Data Structures & Algorithms',
      topic: 'Binary Search / Arithmetic Overflow',
      intent: 'Bug Prevention Reference',
      tags: ['#BinarySearch', '#IntegerOverflow', '#Math', '#LeetCode'],
    },
    similarityScore: 97.4,
    retrievedSnippet: 'mid = left + (right - left) / 2 vs (left + right) / 2 comparison notes',
    whyItMatters: 'Traditional search needs you to remember "mid = left + ...". Pomniter knows this formula represents overflow prevention in binary search.',
  },
  {
    id: 'flight',
    label: 'Travel // Flight Ticket',
    query: 'Where is my boarding pass for Delhi from last Tuesday?',
    extractedOCR: 'AI 804 DEL INDIRA GANDHI INTL GATE 14B SEAT 12A 06:45',
    inferredContext: {
      category: 'Travel / Documents',
      topic: 'Air India Flight Confirmation',
      intent: 'Active Travel Verification & Gate Navigation',
      tags: ['#FlightTicket', '#AirIndia', '#Delhi', '#Gate14B', '#BoardingPass'],
    },
    similarityScore: 99.1,
    retrievedSnippet: 'Flight AI 804 Boarding Pass • Gate 14B • Seat 12A • Delhi (DEL)',
    whyItMatters: 'Pomniter parsed the raw boarding pass text, understood dates, airports, and flight numbers, allowing a conversational natural language search.',
  },
  {
    id: 'networking',
    label: 'CS Core // TCP Handshake',
    query: 'Show me the diagram of the three-way handshake in TCP',
    extractedOCR: 'SYN -> SYN-ACK -> ACK (seq=x, ack=x+1)',
    inferredContext: {
      category: 'Computer Networks',
      topic: 'Transport Layer / TCP Connection Establishment',
      intent: 'Academic Examination & Concept Review',
      tags: ['#Networking', '#TCP', '#ThreeWayHandshake', '#SYN_ACK'],
    },
    similarityScore: 96.8,
    retrievedSnippet: 'TCP 3-Way Handshake Connection Lifecycle Diagram with Sequence Flags',
    whyItMatters: 'Even without the word "handshake" in your photo filename, multimodal semantics maps your memory directly to the networking diagram.',
  },
];

export default function InteractiveConsole() {
  const [selectedDemo, setSelectedDemo] = useState<DemoQuery>(PRESET_QUERIES[0]);
  const [customQuery, setCustomQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState<'flow' | 'json'>('flow');

  const handleSelect = (demo: DemoQuery) => {
    setIsSearching(true);
    setTimeout(() => {
      setSelectedDemo(demo);
      setIsSearching(false);
    }, 250);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuery.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      // Create a dynamic match based on custom input
      const matched = PRESET_QUERIES.find((q) =>
        customQuery.toLowerCase().includes('flight') ||
        customQuery.toLowerCase().includes('ticket') ||
        customQuery.toLowerCase().includes('delhi')
          ? q.id === 'flight'
          : customQuery.toLowerCase().includes('tcp') ||
            customQuery.toLowerCase().includes('network')
          ? q.id === 'networking'
          : customQuery.toLowerCase().includes('binary') ||
            customQuery.toLowerCase().includes('mid')
          ? q.id === 'binary-search'
          : q.id === 'bfs'
      ) || PRESET_QUERIES[0];

      setSelectedDemo({
        ...matched,
        query: customQuery,
      });
      setIsSearching(false);
    }, 350);
  };

  return (
    <div
      className="neo-box"
      style={{
        backgroundColor: 'var(--bg-surface)',
        overflow: 'hidden',
      }}
    >
      {/* Console Header Bar */}
      <div
        style={{
          backgroundColor: '#121212',
          color: '#ffffff',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: 'var(--border-width) solid var(--border-color)',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: 'var(--accent-green)',
              borderRadius: '50%',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '0.06em',
            }}
          >
            SYSTEM CONSOLE // POMNITER MEMORY RETRIEVAL ENGINE
          </span>
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            backgroundColor: '#22222b',
            padding: '3px 8px',
            border: '1px solid #444',
            color: 'var(--accent-green)',
          }}
        >
          STATUS: ONLINE • SIMULATION MODE
        </div>
      </div>

      {/* Preset Query Badges */}
      <div
        style={{
          padding: '16px 20px',
          borderBottom: '2px solid var(--border-color)',
          backgroundColor: 'var(--bg-main)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 800,
            color: 'var(--text-dim)',
            marginRight: '4px',
          }}
        >
          TRY PRESET MEMORY:
        </span>
        {PRESET_QUERIES.map((demo) => {
          const isSelected = selectedDemo.id === demo.id;
          return (
            <button
              key={demo.id}
              onClick={() => handleSelect(demo)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '6px 12px',
                border: 'var(--border-width) solid var(--border-color)',
                boxShadow: isSelected ? '2px 2px 0px var(--shadow-color)' : 'none',
                backgroundColor: isSelected ? 'var(--accent-yellow)' : 'var(--bg-card)',
                color: isSelected ? '#121212' : 'var(--text-main)',
                cursor: 'pointer',
                transition: 'all 0.1s ease',
              }}
            >
              {demo.label}
            </button>
          );
        })}
      </div>

      {/* Search Input Bar */}
      <form
        onSubmit={handleCustomSubmit}
        style={{
          padding: '18px 20px',
          display: 'flex',
          gap: '10px',
          borderBottom: '2px solid var(--border-color)',
          backgroundColor: 'var(--bg-surface)',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'var(--bg-main)',
            border: 'var(--border-width) solid var(--border-color)',
            padding: '10px 14px',
            boxShadow: 'inset 2px 2px 0px rgba(0,0,0,0.1)',
          }}
        >
          <Search size={18} color="var(--text-dim)" />
          <input
            type="text"
            value={customQuery}
            onChange={(e) => setCustomQuery(e.target.value)}
            placeholder={`Search memory... (e.g. "${selectedDemo.query}")`}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.92rem',
              color: 'var(--text-main)',
            }}
          />
        </div>
        <button
          type="submit"
          className="neo-btn"
          style={{ padding: '0 20px', whiteSpace: 'nowrap' }}
          disabled={isSearching}
        >
          {isSearching ? 'Analyzing...' : 'Search Memory'}
        </button>
      </form>

      {/* Output / Reasoning Workspace */}
      <div style={{ padding: '24px 20px' }}>
        {/* Active Query Display */}
        <div
          style={{
            marginBottom: '20px',
            padding: '12px 16px',
            backgroundColor: 'var(--bg-main)',
            border: '2px solid var(--border-color)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 800,
              color: 'var(--text-dim)',
              marginBottom: '4px',
            }}
          >
            // USER NATURAL LANGUAGE INPUT:
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.05rem',
              color: 'var(--text-main)',
            }}
          >
            "{selectedDemo.query}"
          </div>
        </div>

        {/* 2-Column Reasoning Breakdown */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '20px',
          }}
        >
          {/* Card A: Raw OCR vs Multimodal Understanding */}
          <div
            className="neo-box-static"
            style={{
              padding: '18px',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                }}
              >
                1. Context Extraction
              </span>
              <span className="neo-badge neo-badge-green" style={{ fontSize: '0.7rem' }}>
                MATCH: {selectedDemo.similarityScore}%
              </span>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-dim)',
                  marginBottom: '3px',
                }}
              >
                RAW OCR EXTRACTED:
              </div>
              <code
                style={{
                  display: 'block',
                  padding: '8px 10px',
                  backgroundColor: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.8rem',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-all',
                }}
              >
                {selectedDemo.extractedOCR}
              </code>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-dim)',
                  marginBottom: '4px',
                }}
              >
                POMNITER SEMANTIC INFERENCE:
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <div>
                  <strong>Category:</strong> {selectedDemo.inferredContext.category}
                </div>
                <div>
                  <strong>Topic:</strong> {selectedDemo.inferredContext.topic}
                </div>
                <div>
                  <strong>Intent:</strong> {selectedDemo.inferredContext.intent}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '12px' }}>
              {selectedDemo.inferredContext.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    padding: '2px 6px',
                    backgroundColor: 'var(--accent-purple)',
                    color: '#121212',
                    border: '1px solid #121212',
                    fontWeight: 700,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card B: Retrieved Screenshot Match */}
          <div
            className="neo-box-static"
            style={{
              padding: '18px',
              backgroundColor: 'var(--accent-peach)',
              color: '#121212',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px',
              }}
            >
              <CheckCircle2 size={18} strokeWidth={2.5} />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                }}
              >
                2. Retrieved Memory Card
              </span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.05rem',
                lineHeight: 1.3,
                marginBottom: '10px',
              }}
            >
              {selectedDemo.retrievedSnippet}
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                lineHeight: 1.55,
                backgroundColor: 'rgba(255,255,255,0.7)',
                padding: '10px 12px',
                border: '1.5px solid #121212',
                marginBottom: '14px',
              }}
            >
              <strong>Why this matched:</strong> {selectedDemo.whyItMatters}
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <span
                className="neo-btn"
                style={{
                  padding: '6px 12px',
                  fontSize: '0.78rem',
                  backgroundColor: '#121212',
                  color: '#ffffff',
                }}
              >
                View High-Res
              </span>
              <span
                className="neo-btn neo-btn-yellow"
                style={{ padding: '6px 12px', fontSize: '0.78rem' }}
              >
                Copy Context
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
